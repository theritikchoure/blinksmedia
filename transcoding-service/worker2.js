const amqp = require("amqplib");
const Transcoder = require("./services/transcoder");

async function startWorker() {
  const connection = await amqp.connect("amqp://localhost");
  console.log("connected to rabbitmq");
  const channel = await connection.createChannel();
  const queue = "video_transcode_queue";

  await channel.assertQueue(queue, { durable: true });

  const jobId = generateJobId(); // Generate a unique ID for the job
  const message = {
    filePath: "/video/mega/test.mp4",
    outputFormat: "avi",
    jobId,
  };

  channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)), {
    persistent: true,
  });

  console.log(`Job ${jobId} submitted to the queue`);
}

function generateJobId() {
  return Math.random().toString(36).substr(2, 9);
}

startWorker();
