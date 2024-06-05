// importing models
const User = require("../models/userModel");

// @GET all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ users: users });
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
};

// POST user
const createUser = async (req, res) => {
  const user = req.body;
  try {
    const newUser = await User.create(user);
    res.status(201).json({
      message: "User has successfully signed up!",
      user: { ...user, password: "*****" },
    });
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
};

module.exports = { getAllUsers, createUser };
