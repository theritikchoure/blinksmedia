const webPush = require("web-push");

const Subscription = require('../models/push_notification_subscriptions.model.js');

// Replace with your VAPID keys
const publicVapidKey =
  "BDmFy-ySri7M4mvIRxUrSQzMIaZKWYC9CTde7fsn3QoRSZw353rG3lEjKAO1oggsA5ui2KF42_oKRqbASQYUKA8";
const privateVapidKey = "EsmUl5Fyf8W6rSezeHZ9DfncgfAhP3vjHFygOjVJJ2Y";

webPush.setVapidDetails(
  "mailto:test@example.com",
  publicVapidKey,
  privateVapidKey
);

// Subscribe to push notifications
const subscribeToPushNotifications = async (req, res) => {
  try {
    const subscription = req.body;

    await Subscription.deleteMany({});

    // Check if subscription already exists
    let existingSubscription = await Subscription.findOne({
      endpoint: subscription.endpoint,
    });

    if (existingSubscription) {
      res.status(200).json({ success: true, data: existingSubscription });
      return;
    }

    const newSubscription = new Subscription(subscription);
    await newSubscription.save(); // Save to MongoDB

    res.status(200).json({ success: true, data: newSubscription });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Subscribe to push notifications
const sendPushNotifications = async (req, res) => {
  try {
    let notificationPayload = {
      title: "Broadcast",
      body: "This is a message to all users!",
    };

    // Fetch all subscriptions from DB
    const subscriptions = await Subscription.find();

    console.log(subscriptions[0].endpoint === subscriptions[1].endpoint);

    // Send notifications to all subscribers
    // subscriptions.forEach((subscription) => {
    //   webPush
    //     .sendNotification(subscription, JSON.stringify(notificationPayload))
    //     .then((result) =>
    //       console.log(`Notification sent to ${subscription.endpoint}`)
    //     )
    //     .catch((err) => console.error("Error sending notification", err));
    // });

    res.status(200).json({ message: "Notifications sent." });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  subscribeToPushNotifications,
  sendPushNotifications,
};
