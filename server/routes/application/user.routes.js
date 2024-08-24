const express = require("express");
const userAuthRoutes = require("./user_auth.routes.js");
// const userRoutes = require("./userRoutes");
// const videoRoutes = require("./videoRoutes");
// const commentRoutes = require("./commentRoutes");

const router = express.Router();

router.use("/auth/", userAuthRoutes);

module.exports = router;
