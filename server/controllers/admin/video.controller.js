const VideoService = require("../../services/video.service.js");

// Get all videos
const getAllVideos = async (req, res) => {
  try {
    const videos = await VideoService.getAllVideos();
    res.status(200).json({ success: true, data: videos });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Get a video by ID
const getVideoById = async (req, res) => {
  const { videoId } = req.params;
  try {
    const video = await VideoService.getVideoById(videoId);
    if (!video) {
      return res
        .status(404)
        .json({ success: false, message: "Video not found" });
    }
    res.status(200).json({ success: true, data: video });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Create a new video
const createVideo = async (req, res) => {
  try {
    const newVideo = await VideoService.createVideo(req.body);
    res.status(201).json({ success: true, data: newVideo });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error creating video" });
  }
};

// Update a video
const updateVideo = async (req, res) => {
  const { videoId } = req.params;
  try {
    const updatedVideo = await VideoService.updateVideo(videoId, req.body);
    if (!updatedVideo) {
      return res
        .status(404)
        .json({ success: false, message: "Video not found" });
    }
    res.status(200).json({ success: true, data: updatedVideo });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error updating video" });
  }
};

// Delete a video
const deleteVideo = async (req, res) => {
  const { videoId } = req.params;
  try {
    const deletedVideo = await VideoService.deleteVideo(videoId);
    if (!deletedVideo) {
      return res
        .status(404)
        .json({ success: false, message: "Video not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Video deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error deleting video" });
  }
};

module.exports = {
  getAllVideos,
  getVideoById,
  createVideo,
  updateVideo,
  deleteVideo,
};
