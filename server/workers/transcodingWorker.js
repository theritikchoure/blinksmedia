// workers/transcodingWorker.js

const TranscodingService = require("../services/transcodingService");
const RabbitMQService = require("../services/rabbitmqService");
const logger = require("../utils/logger");

const startWorker = () => {
  RabbitMQService.consumeQueue(async (job) => {
    try {
      logger.info(`Received job for video: ${job.videoPath}`);

      // Process the transcoding job
      const outputFilePath = await TranscodingService.processTranscodingJob(
        job
      );

      // Handle the result (e.g., update a database, notify another service)
      logger.info(`Transcoding completed for video: ${job.videoPath}`);
      logger.info(`Output file saved at: ${outputFilePath}`);
    } catch (err) {
      logger.error("Error processing transcoding job:", err.message);
    }
  });
};

startWorker();

module.exports = {
  startWorker,
};
