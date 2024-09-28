const express = require("express");
const {
  subscribeToPushNotifications,
  sendPushNotifications,
} = require("../../controllers/push_notifications.controller.js");

const router = express.Router();

router.post(
  "/subscribe",
  subscribeToPushNotifications
);

router.post(
  "/send-notifications",
  sendPushNotifications
);

module.exports = router;
