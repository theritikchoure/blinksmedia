const amqp = require("amqplib/callback_api");

let channel;

const connectRabbitMQ = () => {
  amqp.connect(process.env.RABBITMQ_URL, (err, connection) => {
    if (err) throw err;
    connection.createChannel((err, ch) => {
      if (err) throw err;
      channel = ch;
      console.log("RabbitMQ connected");
    });
  });
};

const publishToQueue = (queue, message) => {
  channel.sendToQueue(queue, Buffer.from(message));
};

const consumeFromQueue = (queue, callback) => {
  channel.consume(queue, (message) => {
    callback(message.content.toString());
    channel.ack(message);
  });
};

module.exports = {
  connectRabbitMQ,
  publishToQueue,
  consumeFromQueue,
};
