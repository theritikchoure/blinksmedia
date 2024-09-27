// services/transcodingService.js

const videoProcessingService = require("./videoProcessingService");
const rabbitmqService = require("./rabbitmqService");
const logger = require("../utils/logger");

const TranscodingService = {
  async startTranscodingJob(videoData) {
    try {
      // Send the video data to the processing queue
      await rabbitmqService.publishToQueue(videoData);
      logger.info("Transcoding job queued successfully");
    } catch (err) {
      logger.error("Failed to queue transcoding job:", err.message);
      throw err;
    }
  },

  async processTranscodingJob(job) {
    try {
      // Perform the actual transcoding
      const result = await videoProcessingService.transcodeVideo(job.videoPath);
      logger.info("Transcoding job completed successfully");
      return result;
    } catch (err) {
      logger.error("Failed to complete transcoding job:", err.message);
      throw err;
    }
  },
};

module.exports = TranscodingService;
