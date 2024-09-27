const streamifier = require("streamifier");
const path = require("path");
const ffmpeg = require("fluent-ffmpeg");
const ffmpegInstaller = require("@ffmpeg-installer/ffmpeg");
const ffprobeInstaller = require("@ffprobe-installer/ffprobe");
const cloudinary = require("../../../config/cloudinary");

// Set paths for ffmpeg and ffprobe
ffmpeg.setFfmpegPath(ffmpegInstaller.path);
ffmpeg.setFfprobePath(ffprobeInstaller.path);

// Export the uploadVideo function
module.exports = {
  uploadVideo,
};

/**
 * Checks the video resolution and aspect ratio using ffmpeg.
 * @param {Buffer} fileBuffer - The video file buffer.
 * @returns {Promise<Object>} - Returns an object containing the validity of the video and its aspect ratio.
 */
function checkVideoResolutionAndRatio(fileBuffer) {
  return new Promise((resolve, reject) => {
    const videoStream = streamifier.createReadStream(fileBuffer);

    // Use ffmpeg to extract video metadata
    ffmpeg(videoStream).ffprobe((err, metadata) => {
      if (err) {
        reject(err);
      } else {
        const { width, height } = metadata.streams[0];
        const aspectRatio = width / height;

        // Log resolution and aspect ratio for debugging
        console.log(`Resolution: ${width}x${height}`);
        console.log(`Aspect Ratio: ${aspectRatio}`);

        // Check if the video meets the 360p resolution requirement (640x360)
        const isValidResolution = width >= 640 && height >= 360;
        resolve({ valid: isValidResolution, aspectRatio });
      }
    });
  });
}

/**
 * Uploads the video to Cloudinary after checking its quality and aspect ratio.
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to send back to the client.
 * @returns {Promise<void>}
 */
async function uploadVideo(req, res) {
  try {
    console.log("Uploading video file to Cloudinary");

    // Extract the uploaded video file from the request
    const fileBuffer = req.file.buffer;
    const originalFilename = req.file.originalname;

    // Validate video quality and resolution
    const videoCheck = await checkVideoResolutionAndRatio(fileBuffer);

    // Return an error if the video doesn't meet the resolution requirement
    if (!videoCheck.valid) {
      return res.status(400).json({
        message: "Video resolution must be 360p (640x360)",
      });
    }

    // Proceed with video upload
    uploadToCloudinary(fileBuffer, originalFilename, res);
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    res.status(500).send("Video upload failed");
  }
}

/**
 * Uploads the video to Cloudinary using the provided file buffer and filename.
 * @param {Buffer} fileBuffer - The video file buffer.
 * @param {string} originalFilename - The original file name of the video.
 * @param {Object} res - The response object to send back the result.
 */
function uploadToCloudinary(fileBuffer, originalFilename, res) {
  // Log the received file for debugging
  console.log("Received file:", originalFilename);

  // Create the Cloudinary upload stream
  const uploadStream = cloudinary.uploader.upload_stream(
    {
      resource_type: "video",
      folder: "original-videos", // Cloudinary folder name (optional)
      public_id: path.parse(originalFilename).name, // Use the file name as the public ID
      use_filename: true, // Retain the original filename in Cloudinary
    },
    (error, result) => {
      if (error) {
        console.error("Error uploading video to Cloudinary:", error);
        return res
          .status(500)
          .json({ message: "Upload to Cloudinary failed", error });
      }

      // Log the upload result
      console.log("Upload result:", result);

      // Respond with the result of the upload
      res.status(200).json({
        message: "Video uploaded successfully",
        data: {
          public_id: result.public_id,
          secure_url: result.secure_url, // Cloudinary URL to access the video
          duration: result.duration, // Duration of the video (optional)
          format: result.format, // Video format (optional)
        },
      });
    }
  );

  // Stream the file buffer to Cloudinary
  streamifier.createReadStream(fileBuffer).pipe(uploadStream);
}
