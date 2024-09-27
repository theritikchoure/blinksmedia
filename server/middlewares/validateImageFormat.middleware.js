// middleware/validateImageFormat.js
const ALLOWED_FORMATS = ["image/jpeg", "image/png", "image/webp"];

const validateImageFormat = (req, res, next) => {
  const file = req.file;
  if (file && !ALLOWED_FORMATS.includes(file.mimetype)) {
    return res
      .status(400)
      .json({
        success: false,
        message: "Invalid file format. Only JPEG, PNG, and WEBP are allowed.",
      });
  }
  next();
};

module.exports = validateImageFormat;
