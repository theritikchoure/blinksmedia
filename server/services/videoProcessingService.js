// services/videoProcessingService.js

const ffmpeg = require("fluent-ffmpeg");
const logger = require("../utils/logger");

const VideoProcessingService = {
  async transcodeVideo(videoPath) {
    return new Promise((resolve, reject) => {
      const outputFilePath = `${videoPath.split(".")[0]}_transcoded.mp4`;

      ffmpeg(videoPath)
        .output(outputFilePath)
        .on("end", () => {
          logger.info("Video transcoding completed:", outputFilePath);
          resolve(outputFilePath);
        })
        .on("error", (err) => {
          logger.error("Video transcoding error:", err.message);
          reject(err);
        })
        .run();
    });
  },
};

module.exports = VideoProcessingService;
