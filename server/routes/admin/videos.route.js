const express = require("express");
const passport = require("passport");
const {
  getAllVideos,
  getVideoById,
  createVideo,
  updateVideo,
  deleteVideo,
} = require("../../controllers/admin/video.controller.js");

const router = express.Router();

// Admin-only routes for videos
router.get("/", getAllVideos);
router.get("/:videoId", getVideoById);
router.post("/", createVideo);
router.put("/:videoId", updateVideo);
router.delete("/:videoId", deleteVideo);

module.exports = router;
