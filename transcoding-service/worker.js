// worker.js
require("dotenv").config(); // Load environment variables from .env file
const amqp = require("amqplib");
const { transcodeVideo } = require("./services/transcoder");

/**
 * Connects to RabbitMQ, sets up the channel, and starts listening for video transcoding jobs.
 */
async function startWorker() {
  try {
    // Establish a connection to RabbitMQ
    const connection = await amqp.connect(
      process.env.RABBITMQ_URL || "amqp://localhost"
    );
    console.log("Connected to RabbitMQ");

    // Create a channel for communication
    const channel = await connection.createChannel();
    const queueName =
      process.env.RABBITMQ_VIDEO_TRANSCODING_QUEUE || "video_transcode_queue";

    // Ensure the queue exists and is durable (survives broker restarts)
    await channel.assertQueue(queueName, { durable: true });
    console.log(`Waiting for messages in queue: ${queueName}`);

    // Consume messages from the queue and process them
    channel.consume(queueName, async (msg) => {
      if (msg !== null) {
        // Parse the job message
        const job = JSON.parse(msg.content.toString());
        console.log(
          `------------------------Received transcoding task. Job Id: ${job.jobId}-----------------------------`
        );

        try {
          // Perform the transcoding task
          const outputPath = await transcodeVideo(
            job.filePath,
            job.outputFormat
          );
          console.log(`Job ${job.jobId} completed. Output path: ${outputPath}`);

          // Optionally, update job status in a database

          // Acknowledge the message if processing is successful
          channel.ack(msg);
          console.log(
            `------------------------Completed transcoding task-----------------------------`
          );
        } catch (error) {
          console.error(`Error processing job ${job.jobId}:`, error);
          // Optionally, update job status to 'failed' in a database

          // Nack the message to requeue it for future processing
          channel.nack(msg, false, true);
        }
      }
    });
  } catch (error) {
    console.error("Error starting the worker:", error);
  }
}

// Start the worker
startWorker();
