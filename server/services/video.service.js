const Video = require("../models/videos.model"); // Assuming you have a Video model

// Get all videos
const getAllVideos = async () => {
  return await Video.find();
};

// Get a video by ID
const getVideoById = async (videoId) => {
  return await Video.findById(videoId);
};

// Create a new video
const createVideo = async (videoData) => {
  const newVideo = new Video(videoData);
  return await newVideo.save();
};

// Update a video
const updateVideo = async (videoId, updatedData) => {
  return await Video.findByIdAndUpdate(videoId, updatedData, { new: true });
};

// Delete a video
const deleteVideo = async (videoId) => {
  return await Video.findByIdAndDelete(videoId);
};

module.exports = {
  getAllVideos,
  getVideoById,
  createVideo,
  updateVideo,
  deleteVideo,
};
