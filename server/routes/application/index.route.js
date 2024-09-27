const express = require("express");
const userRoutes = require("./user.routes.js");
const videoRoutes = require("./video.route.js");
const videoUploadRoutes = require("./video_upload.routes.js");
const imagesUploadRoutes = require("./images.route.js");
// const userRoutes = require("./userRoutes");
// const videoRoutes = require("./videoRoutes");
// const commentRoutes = require("./commentRoutes");

const router = express.Router();

router.use("/users/", userRoutes);

router.use("/videos/", videoRoutes);

router.use("/videos-upload/", videoUploadRoutes);
router.use("/images-upload/", imagesUploadRoutes);


router.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome"
    })
})

module.exports = router;
