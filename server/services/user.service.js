const User = require("../models/users.model.js");

// Get all users
const getAllUsers = async () => {
  return await User.find(); // Fetch all users from the database
};

// Get a user by ID
const getUserById = async (userId) => {
  return await User.findById(userId);
};

// Create a new user
const createUser = async (userData) => {
  const newUser = new User(userData);
  return await newUser.save();
};

// Update an existing user
const updateUser = async (userId, updatedData) => {
  return await User.findByIdAndUpdate(userId, updatedData, { new: true });
};

// Delete a user
const deleteUser = async (userId) => {
  return await User.findByIdAndDelete(userId);
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
