const mongoose = require("mongoose");

const LikeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    video: { type: mongoose.Schema.Types.ObjectId, ref: "Video", index: true },
    comment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
      index: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Like", LikeSchema);
