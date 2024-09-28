const express = require("express");
const passport = require("passport");
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/admin/user.controller.js");

const router = express.Router();

// Middleware to check if user is an admin
const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === "ADMIN") {
    return next();
  }
  return res.status(403).json({ message: "Access denied" });
};

// Admin-only routes
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  isAdmin,
  getAllUsers
);
router.get(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  isAdmin,
  getUserById
);
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  isAdmin,
  createUser
);
router.put(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  isAdmin,
  updateUser
);
router.delete(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  isAdmin,
  deleteUser
);

module.exports = router;
