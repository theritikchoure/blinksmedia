const express = require("express");
const userRoutes = require("./users.route.js");
const videoRoutes = require("./videos.route.js");

const router = express.Router();

router.use("/users", userRoutes);
router.use("/videos", videoRoutes);

module.exports = router;
