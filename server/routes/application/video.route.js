const express = require("express");

const {
  createVideoController,
  getAllVideosController,
} = require("../../controllers/application/videos/videos.controller.js");

const router = express.Router();

router.post("/", createVideoController);

router.get('/', getAllVideosController);

module.exports = router;
