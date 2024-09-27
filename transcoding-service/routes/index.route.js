const express = require("express");
const applicationRoutes = require("./jobs.route.js");

const router = express.Router();

// router.use("/admin", adminRoutes);
router.use("/jobs", applicationRoutes);


module.exports = router;
