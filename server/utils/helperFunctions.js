// utils/helperFunctions.js

/**
 * Generate a unique identifier for a transcoding job.
 * @returns {string} Unique identifier
 */
function generateJobId() {
  return `job_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
}

/**
 * Validate video file format
 * @param {string} fileName
 * @returns {boolean} True if format is valid, otherwise false
 */
function isValidVideoFormat(fileName) {
  const validFormats = [".mp4", ".mkv", ".avi", ".mov"];
  const fileExtension = fileName.slice(fileName.lastIndexOf(".")).toLowerCase();
  return validFormats.includes(fileExtension);
}

/**
 * Calculate estimated processing time based on file size
 * @param {number} fileSizeInMB
 * @returns {number} Estimated time in seconds
 */
function estimateProcessingTime(fileSizeInMB, processingSpeedMBps = 10) {
  return Math.ceil(fileSizeInMB / processingSpeedMBps);
}

module.exports = {
  generateJobId,
  isValidVideoFormat,
  estimateProcessingTime,
};
