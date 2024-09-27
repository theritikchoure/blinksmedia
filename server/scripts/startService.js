// scripts/startService.js

require("dotenv").config();
const mongoose = require("mongoose");
const logger = require("../utils/logger");
const { connectRabbitMQ } = require("../config/rabbitmq");
const { startWorker } = require("../workers/transcodingWorker");

const startService = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info("Connected to MongoDB");

    // Connect to RabbitMQ
    connectRabbitMQ((connection) => {
      logger.info("Connected to RabbitMQ");
      // Start the transcoding worker
      startWorker();
    });
  } catch (err) {
    logger.error("Failed to start service:", err.message);
    process.exit(1);
  }
};

startService();
