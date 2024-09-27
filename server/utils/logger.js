// utils/logger.js

const { createLogger, format, transports } = require("winston");
const DailyRotateFile = require("winston-daily-rotate-file");

// Define the log format
const logFormat = format.combine(
  format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  format.printf(({ timestamp, level, message }) => {
    return `${timestamp} [${level.toUpperCase()}]: ${message}`;
  })
);

class Logger {
  constructor() {
    if (!Logger.instance) {
      // Create a rotating file transport
      const fileTransport = new DailyRotateFile({
        filename: "logs/%DATE%-app.log", // Logs will be saved as 'logs/yyyy-mm-dd-app.log'
        datePattern: "YYYY-MM-DD", // Daily rotation
        maxFiles: "14d", // Keep logs for 14 days
        level: "info",
      });

      // Create a logger instance
      this.logger = createLogger({
        level: process.env.LOG_LEVEL || "info", // Set log level from environment or default to 'info'
        format: logFormat,
        transports: [
          new transports.Console(), // Output logs to console
          fileTransport, // Save logs to a rotating file
        ],
      });

      Logger.instance = this;
    }

    return Logger.instance;
  }
}

const instance = new Logger();
Object.freeze(instance);

module.exports = instance.logger;
