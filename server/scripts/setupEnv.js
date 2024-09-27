// scripts/setupEnv.js

const fs = require("fs");
const path = require("path");
const logger = require("../utils/logger");

const envFilePath = path.resolve(__dirname, "../.env");
const envExampleFilePath = path.resolve(__dirname, "../.env.example");

// Define default environment variables
const defaultEnvVars = `
# MongoDB
MONGO_URI=mongodb://localhost:27017/transcoding_service

# RabbitMQ
RABBITMQ_URI=amqp://localhost
RABBITMQ_QUEUE=transcoding_queue
RABBITMQ_EXCHANGE=transcoding_exchange
RABBITMQ_ROUTING_KEY=transcoding_key

# Logging
LOG_LEVEL=info
`;

// Create a .env file if it doesn't exist
if (!fs.existsSync(envFilePath)) {
  fs.writeFileSync(envFilePath, defaultEnvVars);
  logger.info(".env file created");
} else {
  logger.info(".env file already exists");
}

// Optionally create a .env.example file for reference
if (!fs.existsSync(envExampleFilePath)) {
  fs.writeFileSync(envExampleFilePath, defaultEnvVars);
  logger.info(".env.example file created");
} else {
  logger.info(".env.example file already exists");
}
