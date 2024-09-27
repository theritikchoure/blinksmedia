const mongoose = require("mongoose");

const PushNotificationSubscriptionSchema = new mongoose.Schema(
  {
    endpoint: { type: String, required: true },
    keys: {
      p256dh: String,
      auth: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("push_notification_subscriptions", PushNotificationSubscriptionSchema);
