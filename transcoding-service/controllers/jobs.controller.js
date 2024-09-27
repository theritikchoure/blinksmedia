const jobService = require("../services/jobService");
const {
  createJobValidationSchema,
  updateJobStatusValidationSchema,
} = require("../validations/jobs.validations");


// Create a new transcoding job
const createJobController = async (req, res) => {
  try {
    // Validate request body
    const { error, value } = createJobValidationSchema.validate(req.body);

    if (error) {
      return res
        .status(400)
        .json({ message: "Validation error", error: error.details });
    }

    const createdJob = await jobService.createJob(value); // Use validated data

    res.status(201).json({
      message: "Transcoding job created successfully",
      job: createdJob,
    });
  } catch (error) {
    console.error("Error creating transcoding job:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get all transcoding jobs
const getAllJobsController = async (req, res) => {
  try {
    const jobs = await jobService.getAllJobs(); // Use jobService to get all jobs

    res.status(200).json({
      message: "Transcoding jobs fetched successfully",
      data: jobs,
    });
  } catch (error) {
    console.error("Error fetching transcoding jobs:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update the status of a specific transcoding job by ID
const updateJobStatusController = async (req, res) => {
  try {
    const { jobId } = req.params;

    // Validate request body
    const { error, value } = updateJobStatusValidationSchema.validate(req.body);

    if (error) {
      return res
        .status(400)
        .json({ message: "Validation error", error: error.details });
    }

    const updatedJob = await jobService.updateJobStatus(jobId, value.status); // Use validated data

    if (!updatedJob) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json({
      message: "Job status updated successfully",
      data: updatedJob,
    });
  } catch (error) {
    console.error("Error updating job status:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get a specific transcoding job by ID
const getJobByIdController = async (req, res) => {
  try {
    const { jobId } = req.params;
    const job = await jobService.getJobById(jobId); // Use jobService to get job by ID

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json({
      message: "Job fetched successfully",
      data: job,
    });
  } catch (error) {
    console.error("Error fetching job:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete a transcoding job by ID
const deleteJobController = async (req, res) => {
  try {
    const { jobId } = req.params;

    const deletedJob = await jobService.deleteJob(jobId); // Use jobService to delete job

    if (!deletedJob) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json({
      message: "Job deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting job:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


module.exports = {
  createJobController,
  getAllJobsController,
  getJobByIdController,
  updateJobStatusController,
  deleteJobController,
};