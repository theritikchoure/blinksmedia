const express = require("express");
const userRoutes = require("./user.routes.js");
const { loginController, registerController } = require("../../controllers/application/user/auth.controller.js");

const router = express.Router();

router.post("/login", loginController);
// router.post("/register", registerController);

module.exports = router;
