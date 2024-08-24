const express = require("express");
const comments = require('../../models/comments.model')
const likes = require('../../models/likes.model')
const users = require('../../models/users.model')
const videos = require('../../models/videos.model')
// const authRoutes = require("./authRoutes");
// const userRoutes = require("./userRoutes");
// const videoRoutes = require("./videoRoutes");
// const commentRoutes = require("./commentRoutes");

const router = express.Router();

// router.use("/auth", userAuthenticationRoutes);


router.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome"
    })
})

module.exports = router;
