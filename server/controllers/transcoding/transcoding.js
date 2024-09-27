// controllers/transcodingController.js

const TranscodingService = require("../services/transcodingService");
const RabbitMQService = require("../services/rabbitmqService");
const logger = require("../utils/logger");

/**
 * Handle a request to submit a new transcoding job.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const submitTranscodingJob = async (req, res) => {
  try {
    const { videoPath } = req.body;

    // Validate the input
    if (!videoPath) {
      return res.status(400).json({ error: "Video path is required" });
    }

    // Optionally validate the video format
    if (!TranscodingService.isValidVideoFormat(videoPath)) {
      return res.status(400).json({ error: "Invalid video format" });
    }

    // Create a new job object
    const job = {
      jobId: TranscodingService.generateJobId(),
      videoPath,
    };

    // Publish the job to the RabbitMQ queue
    await RabbitMQService.publishToQueue(job);

    logger.info(`Transcoding job submitted: ${job.jobId}`);

    return res.status(202).json({
      message: "Transcoding job submitted successfully",
      jobId: job.jobId,
    });
  } catch (err) {
    logger.error("Failed to submit transcoding job:", err.message);
    return res.status(500).json({ error: "Failed to submit transcoding job" });
  }
};

/**
 * Handle a request to get the status of a transcoding job.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const getTranscodingJobStatus = async (req, res) => {
  try {
    const { jobId } = req.params;

    // Optionally check if the jobId is valid
    if (!jobId) {
      return res.status(400).json({ error: "Job ID is required" });
    }

    // Fetch the job status from the database or another service
    const jobStatus = await TranscodingService.getJobStatus(jobId);

    if (!jobStatus) {
      return res.status(404).json({ error: "Job not found" });
    }

    return res.status(200).json({
      jobId,
      status: jobStatus,
    });
  } catch (err) {
    logger.error("Failed to retrieve transcoding job status:", err.message);
    return res
      .status(500)
      .json({ error: "Failed to retrieve transcoding job status" });
  }
};

module.exports = {
  submitTranscodingJob,
  getTranscodingJobStatus,
};
