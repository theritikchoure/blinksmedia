// scripts/startWorker.js

const { startWorker } = require("../workers/transcodingWorker");
const logger = require("../utils/logger");

try {
  logger.info("Starting Transcoding Worker...");
  startWorker();
} catch (err) {
  logger.error("Failed to start Transcoding Worker:", err.message);
  process.exit(1);
}
