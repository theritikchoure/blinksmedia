const Joi = require("joi");

// Joi schema for job creation
const createJobValidationSchema = Joi.object({
  title: Joi.string().required(),
  inputFile: Joi.string().required(),
  outputFile: Joi.string().required(),
  transcoding_preference: Joi.string().valid("HLS", "DASH", "MP4").required(),
  status: Joi.string()
    .valid("pending", "in_progress", "completed", "failed")
    .default("pending"),
  duration: Joi.number().optional(),
  thumbnail_url: Joi.string().optional(),
  video_url: Joi.string().optional(),
  jobId: Joi.string().optional(),
});

// Joi schema for updating job status
const updateJobStatusValidationSchema = Joi.object({
  status: Joi.string().valid('pending', 'in_progress', 'completed', 'failed').required(),
});

module.exports = {
  createJobValidationSchema,
  updateJobStatusValidationSchema,
};
