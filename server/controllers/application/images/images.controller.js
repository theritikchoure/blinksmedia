const cloudinary = require("../../../config/cloudinary");
const sharp = require("sharp"); // Import sharp

module.exports = {
  uploadVideoThumbnail,
};

// Upload the file in chunks - handled internally by Cloudinary
async function uploadVideoThumbnail(req, res) {
  try {
    // Access the file buffer from Multer's memory storage
    const { buffer } = req.file;

    // Define the desired width and height for 16:9 aspect ratio
    const width = 1280; // Change this to your desired width
    const height = Math.round((width / 16) * 9); // Calculate height for 16:9

    // Resize the image and convert to WebP format using Sharp
    const processedImageBuffer = await sharp(buffer)
      .resize(width, height) // Resize to 1280x720 (16:9 aspect ratio)
      .toFormat("webp") // Convert to WebP
      .toBuffer(); // Get the processed buffer

    // Pipe the buffer into the Cloudinary uploader
    const stream = cloudinary.uploader.upload_stream(
      { folder: "thumbnails" },
      (error, result) => {
        if (error) {
          console.error("Error uploading to Cloudinary:", error);
          return res
            .status(500)
            .json({ success: false, message: "Upload failed" });
        }

        // Send success response with URL
        res.status(200).json({
          success: true,
          message: "Thumbnail uploaded successfully!",
          url: result.secure_url,
        });
      }
    );

    stream.end(processedImageBuffer); // Pass the buffer to the upload stream
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    res.status(500).send("Video upload failed");
  }
}
