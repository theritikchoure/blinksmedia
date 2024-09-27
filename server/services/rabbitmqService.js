// services/rabbitmqService.js

const { getChannel } = require("../config/rabbitmq");
const logger = require("../utils/logger");

const RabbitMQService = {
  async publishToQueue(message) {
    try {
      const channel = getChannel();
      const { queue, exchange, routingKey } = rabbitmqConfig;

      await channel.assertExchange(exchange, "direct", { durable: true });
      await channel.assertQueue(queue, { durable: true });
      await channel.bindQueue(queue, exchange, routingKey);

      channel.publish(
        exchange,
        routingKey,
        Buffer.from(JSON.stringify(message))
      );
      logger.info(`Message published to queue: ${queue}`);
    } catch (err) {
      logger.error("Failed to publish message to queue:", err.message);
    }
  },

  async consumeQueue(callback) {
    try {
      const channel = getChannel();
      const { queue } = rabbitmqConfig;

      await channel.assertQueue(queue, { durable: true });

      channel.consume(queue, (msg) => {
        if (msg !== null) {
          const messageContent = JSON.parse(msg.content.toString());
          callback(messageContent);
          channel.ack(msg);
        }
      });

      logger.info(`Consuming messages from queue: ${queue}`);
    } catch (err) {
      logger.error("Failed to consume messages from queue:", err.message);
    }
  },
};

module.exports = RabbitMQService;
