const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// @route POST auth/register ------------------------------
// @desc Register user
// @access Public
router.post("/register", async (req, res) => {
  const { username, name, password } = req.body;

  if (!username) {
    return res.status(400).json({
      success: false,
      message: "Missing username!",
    });
  } else if (!name) {
    return res.status(400).json({
      success: false,
      message: "Missing name!",
    });
  } else if (!password) {
    return res.status(400).json({
      success: false,
      message: "Missing password!",
    });
  }

  try {
    const user = await User.findOne({ username });

    if (user)
      return res.status(400).json({
        success: false,
        message: "Username is already taken!",
      });

    const newUser = new User({ username, name, password });
    await newUser.save();

    return res.status(201).json({
      success: true,
      message: "Account is created successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error!",
    });
  }
});

// @route POST /auth/login ------------------------------
// @desc Login user
// @access Public
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username) {
    return res.status(400).json({
      success: false,
      message: "Missing username!",
    });
  } else if (!password) {
    return res.status(400).json({
      success: false,
      message: "Missing password!",
    });
  }

  try {
    const user = await User.findOne({ username, password }).select("-password");
    if (!user || !password) {
      return res.status(400).json({
        success: false,
        message: "Incorrect information!",
      });
    }

    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.ACCESS_TOKEN
    );

    return res.status(200).json({
      success: true,
      message: "Login successfully",
      accessToken,
      user: user
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

module.exports = router;
