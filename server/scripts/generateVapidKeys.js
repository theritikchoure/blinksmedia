const webPush = require("web-push");

const vapidKeys = webPush.generateVAPIDKeys();
console.log(vapidKeys);
