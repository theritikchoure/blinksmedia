const express = require("express");
// const adminRoutes = require("./authRoutes");
const applicationRoutes = require("./application/index.route");

const router = express.Router();

// router.use("/admin", adminRoutes);
router.use("/application", applicationRoutes);

module.exports = router;
