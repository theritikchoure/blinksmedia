const express = require("express");
const upload = require("../../middlewares/multer.middleware.js");
const {
  uploadVideo,
} = require("../../controllers/application/videos/videos_upload.controller.js");

const router = express.Router();


// Register route
router.post("/", upload.single("video"), uploadVideo);

module.exports = router;
