const express = require("express");
// const adminRoutes = require("./authRoutes");
const applicationRoutes = require("./application/index.route");
const cloudinary = require("../config/cloudinary");

const Subscription = require("../models/push_notification_subscriptions.model.js");

const router = express.Router();

// router.use("/admin", adminRoutes);
router.use("/application", applicationRoutes);

router.get("/generate-presigned-url", async (req, res) => {
  try {
    const timestamp = Math.round(new Date().getTime() / 1000);

    const signature = cloudinary.utils.api_sign_request(
      {
        timestamp: timestamp,
      },
      process.env.CLOUDINARY_API_SECRET
    );

    res.json({
      url: `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`,
      api_key: process.env.CLOUDINARY_API_KEY,
      timestamp: timestamp,
      signature: signature,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to generate pre-signed URL" });
  }
});

const webPush = require("web-push");

// Replace with your VAPID keys
const publicVapidKey =
  "BDmFy-ySri7M4mvIRxUrSQzMIaZKWYC9CTde7fsn3QoRSZw353rG3lEjKAO1oggsA5ui2KF42_oKRqbASQYUKA8";
const privateVapidKey = "EsmUl5Fyf8W6rSezeHZ9DfncgfAhP3vjHFygOjVJJ2Y";

webPush.setVapidDetails(
  "mailto:test@example.com",
  publicVapidKey,
  privateVapidKey
);

// Subscription endpoint
router.post("/subscribe", async (req, res) => {
    const subscription = req.body;
    
    await Subscription.deleteMany({});

  // Check if subscription already exists
  let existingSubscription = await Subscription.findOne({
    endpoint: subscription.endpoint,
  });

  console.log(existingSubscription);

  if (!existingSubscription) {
    const newSubscription = new Subscription(subscription);
    await newSubscription.save(); // Save to MongoDB
  }

  res.status(201).json({});
});

// Send notification to all users
router.get("/send-notification", async (req, res) => {
  //   const notificationPayload = req.body.payload;

  let notificationPayload = {
    title: "Broadcast",
    body: "This is a message to all users!",
  };

  // Fetch all subscriptions from DB
  const subscriptions = await Subscription.find();

  console.log(subscriptions[0].endpoint === subscriptions[1].endpoint)


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
});

module.exports = router;
