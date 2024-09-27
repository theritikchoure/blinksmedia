const express = require("express");
const { uploadVideoThumbnail } = require("../../controllers/application/images/images.controller.js");
const upload = require("../../middlewares/multer.middleware.js");
const validateImageFormat = require("../../middlewares/validateImageFormat.middleware.js");

const router = express.Router();

router.post("/", upload.single("thumbnail"), validateImageFormat,  uploadVideoThumbnail);

module.exports = router;
