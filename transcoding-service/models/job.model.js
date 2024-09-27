// jobModel.js
const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  inputFile: {
    type: String,
    required: true,
  },
  outputFile: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "processing", "completed", "failed"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
