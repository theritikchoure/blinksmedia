// models/Video.js
const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    enum: ["upcoming", "live", "published"],
    default: "published",
    required: false,
  },
  video_url: {
    type: String,
    required: false,
  },
  video_filepath: {
    type: String,
    required: false,
  },
  slug: {
    type: String,
    required: true,
  },
  thumbnail_url: {
    type: String,
    required: false,
  },
}, {
  timestamps: true
});

module.exports = mongoose.model("Video", videoSchema);
