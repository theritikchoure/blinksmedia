const UserService = require("../../services/user.service"); // Import the user service

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await UserService.getAllUsers();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Get a user by ID
const getUserById = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await UserService.getUserById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Create a new user (for admin purposes)
const createUser = async (req, res) => {
  try {
    const newUser = await UserService.createUser(req.body);
    res.status(201).json({ success: true, data: newUser });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error creating user" });
  }
};

// Update a user's details
const updateUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const updatedUser = await UserService.updateUser(userId, req.body);
    if (!updatedUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, data: updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error updating user" });
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const deletedUser = await UserService.deleteUser(userId);
    if (!deletedUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error deleting user" });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
