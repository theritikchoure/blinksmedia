const Joi = require("joi");

/**
 * Joi schema for validating the video creation payload.
 */
const videoCreationSchema = Joi.object({
  title: Joi.string().min(3).max(100).required().messages({
    "string.base": "Title should be a type of text",
    "string.empty": "Title cannot be empty",
    "string.min": "Title should have a minimum length of {#limit}",
    "any.required": "Title is required",
  }),
  status: Joi.string().valid("live", "offline").required().messages({
    "any.only": "Status must be either 'live' or 'offline'",
    "any.required": "Status is required",
  }),
  description: Joi.string().optional().allow("").max(500).messages({
    "string.max": "Description should not exceed {#limit} characters",
  }),
  video_filepath: Joi.string().uri().optional().messages({
    "string.uri": "Video file path must be a valid URI",
  }),
  transcoding_preference: Joi.string().optional().allow(""),
  thumbnail_url: Joi.string().uri().required().messages({
    "any.required": "Thumbnail URL is required",
    "string.uri": "Thumbnail URL must be a valid URI",
  }),
  video_url: Joi.string().uri().required().messages({
    "any.required": "Video URL is required",
    "string.uri": "Video URL must be a valid URI",
  }),
  duration: Joi.number().integer().positive().optional().messages({
    "number.base": "Duration should be a positive number",
    "number.integer": "Duration should be an integer",
    "number.positive": "Duration should be greater than zero",
  }),
  video_public_id: Joi.string().required().messages({
    "any.required": "Video public id is required",
  }),
  thumbnail_public_id: Joi.string().required().messages({
    "any.required": "Thumbnail public id is required",
  }),
});

module.exports = videoCreationSchema;
