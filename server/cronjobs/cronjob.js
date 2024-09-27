// cronJob.js
const cron = require("node-cron");
const Video = require("../models/videos.model"); // Video model
const cloudinary = require("../config/cloudinary"); // Cloudinary config

// Replace this with the actual demo user ID in your system
const demoUserId = "66f6dda6b4f58865a250120d";

// Function to delete media from Cloudinary
const deleteMediaFromCloudinary = async (publicId, resourceType = "video") => {
  try {
    await cloudinary.uploader.destroy(publicId, {
      resource_type: resourceType,
    });
    console.log(`Deleted ${resourceType} from Cloudinary: ${publicId}`);
  } catch (error) {
    console.error(`Error deleting ${resourceType} from Cloudinary:`, error);
  }
};

// Schedule a cron job to delete demo user's videos every hour
const scheduleEveryHourJob = () => {
  cron.schedule("0 * * * *", async () => {
    try {
      console.log("Running job to delete demo user's videos.");

      // Find all videos belonging to the demo user
      const demoVideos = await Video.find({ userId: demoUserId });

      // Loop through each video and delete its associated media
      for (const video of demoVideos) {
        // Delete video from Cloudinary
        await deleteMediaFromCloudinary(video.video_public_id, "video");

        // If there's a thumbnail image associated, delete that too
        if (video.thumbnail_public_id) {
          await deleteMediaFromCloudinary(video.thumbnail_public_id, "image");
        }
      }

      // Delete videos from the database
      const deletedVideos = await Video.deleteMany({ userId: demoUserId });
      console.log(
        `Deleted ${deletedVideos.deletedCount} videos for demo user.`
      );
    } catch (error) {
      console.error("Error deleting demo user's videos:", error);
    }
  });

  console.log("Cron job scheduled to delete demo user's videos every hour");
};

module.exports = scheduleEveryHourJob;
