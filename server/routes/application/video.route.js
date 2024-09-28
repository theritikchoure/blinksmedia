const express = require("express");
const passport = require("passport");
const rateLimit = require("express-rate-limit");

const {
  createVideoController,
  getAllVideosController,
  getVideoBySlugController,
} = require("../../controllers/application/videos/videos.controller.js");

const router = express.Router();

// Define the rate limiter (5 requests per hour for demo users)
const demoUserLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour window
  max: 5, // limit each user to 5 requests per window
  message: "You have exceeded the 5 requests in 1 hour limit for demo users", // Custom message
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable `X-RateLimit-*` headers
});

// Middleware to check if the user is a demo user
const isDemoUser = (req, res, next) => {
  if (req.user && String(req.user._id) === "66f6dda6b4f58865a250120d") {
    return demoUserLimiter(req, res, next);
  }
  next();
};

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  isDemoUser,
  createVideoController
);

router.get('/', getAllVideosController);
router.get('/:slug', getVideoBySlugController);

module.exports = router;
