const cloudinary = require("../../../config/cloudinary");

// Route to generate a pre-signed URL for uploading images
app.get("/generate-presigned-url", async (req, res) => {
  try {
    const timestamp = Math.round(new Date().getTime() / 1000);

    const signature = cloudinary.utils.api_sign_request(
      {
        timestamp: timestamp,
      },
      process.env.CLOUDINARY_API_SECRET
    );

    res.json({
      url: `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`,
      api_key: process.env.CLOUDINARY_API_KEY,
      timestamp: timestamp,
      signature: signature,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to generate pre-signed URL" });
  }
});
