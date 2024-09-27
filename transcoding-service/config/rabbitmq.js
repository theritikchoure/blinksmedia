const amqp = require("amqplib");

class RabbitMQConnection {
  constructor() {
    if (!RabbitMQConnection.instance) {
      RabbitMQConnection.instance = this;
    }
    return RabbitMQConnection.instance;
  }

  async connect() {
    if (!this.channel) {
      this.connection = await amqp.connect(process.env.RABBITMQ_URL);
      this.channel = await this.connection.createChannel();
    }
    return this.channel;
  }
}

const instance = new RabbitMQConnection();
Object.freeze(instance);
module.exports = instance;
