const Job = require("../models/job.model"); // Assuming you have a Job model for the database

// Create a new job
const createJob = async (jobData) => {
  const newJob = new Job(jobData);
  return await newJob.save();
};

// Get all jobs
const getAllJobs = async () => {
  return await Job.find({});
};

// Get a job by ID
const getJobById = async (jobId) => {
  return await Job.findById(jobId);
};

// Update job status by ID
const updateJobStatus = async (jobId, status) => {
  return await Job.findByIdAndUpdate(jobId, { status }, { new: true });
};

// Delete a job by ID
const deleteJob = async (jobId) => {
  return await Job.findByIdAndDelete(jobId);
};

module.exports = {
  createJob,
  getAllJobs,
  getJobById,
  updateJobStatus,
  deleteJob,
};
