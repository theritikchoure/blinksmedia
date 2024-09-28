const express = require("express");
const passport = require("passport");
const adminRoutes = require("./admin/index.route.js");
const applicationRoutes = require("./application/index.route");

const router = express.Router();

// Middleware to check if user is an admin
const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === "ADMIN") {
    return next();
  }
  return res.status(403).json({ message: "Access denied" });
};

router.use(
  "/admin",
  passport.authenticate("jwt", { session: false }),
  isAdmin,
  adminRoutes
);

router.use("/application", applicationRoutes);

module.exports = router;
