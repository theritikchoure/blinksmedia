// middleware/upload.js
const multer = require("multer");
const path = require("path");

// Set up Multer to handle file uploads and store files in memory
const storage = multer.memoryStorage(); // This stores the file buffer in memory
const upload = multer({ storage: storage }); // Initialize multer


module.exports = upload;
