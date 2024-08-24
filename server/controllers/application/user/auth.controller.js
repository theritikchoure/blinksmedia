const Joi = require("joi");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../../models/users.model"); // Assuming you have a User model for MongoDB

const registerController = async (req, res, next) => {
  // Define the Joi schema for validation
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required().label("Name"),
    username: Joi.string().min(3).max(30).required().label("Username"),
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().min(6).required().label("Password"),
  });

  // Validate the request body against the schema
  const { error, value } = schema.validate(req.body);

  if (error) {
    // Return a 400 Bad Request if validation fails
    return res.status(400).json({
      error: error.details[0].message,
    });
  }

  const { name, email, password, username } = value;

  try {
    // Check if the user already exists in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        error: "Email is already registered",
      });
    }

    // Hash the password before saving the user
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user and save it to the database
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      username,
    });

    await newUser.save();

    // Generate a JWT token for the user
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" } // Token expires in 1 hour
    );

    // Send the token and user information in the response
    return res.status(201).json({
      message: "Registration successful!",
      token,
      user: { email: newUser.email, name: newUser.name },
    });
  } catch (err) {
    next(err); // Pass errors to the centralized error handler
  }
};

const loginController = async (req, res, next) => {
  // Define the Joi schema for validation
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().min(6).required().label("Password"),
  });

  // Validate the request body against the schema
  const { error, value } = schema.validate(req.body);

  if (error) {
    // Return a 400 Bad Request if validation fails
    return res.status(400).json({
      error: error.details[0].message,
    });
  }

  const { email, password } = value;

  try {
    // Check if the user exists in the database
      const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        error: "Invalid email or password",
      });
    }

    // Compare the provided password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
      
    if (!isMatch) {
      return res.status(401).json({
        error: "Invalid email or password",
      });
    }

    // Generate a JWT token for the user
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" } // Token expires in 1 hour
    );

    // Send the token and user information in the response
    return res.status(200).json({
      message: "Login successful!",
      token,
      user: { email: user.email, name: user.name },
    });
  } catch (err) {
    next(err); // Pass errors to the centralized error handler
  }
};

module.exports = {
  loginController,
  registerController,
};
