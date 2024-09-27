const express = require("express");
const {
  createJobController,
  getAllJobsController,
  getJobByIdController,
  updateJobStatusController,
  deleteJobController,
} = require("../controllers/jobs.controller.js");

const router = express.Router();

// Create a new transcoding job
router.post("/", createJobController);

// Get all transcoding jobs
router.get("/", getAllJobsController);

// Get a specific transcoding job by its ID
router.get("/:jobId", getJobByIdController);

// Update the status of a transcoding job by its ID
router.put("/:jobId/status", updateJobStatusController);

// Delete a transcoding job by its ID
router.delete("/:jobId", deleteJobController);

module.exports = router;
