const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const { validateNewUser } = require("../utils/validators");

// @route   POST api/user/register
// @desc    Register User
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  
  const errorMessage = await validateNewUser(name, email, password);
  if (errorMessage) {
    res.status(400);
    throw new Error(errorMessage);
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await new User({ name, email, password: hashedPassword });

  if (user) {
    await user.save();
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user.id)
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data.");
  }
});

// @route   POST api/user/login
// @desc    Authenticate user and get token
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  
  let user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user.id)
    });
  } else {
    return res.status(400).json({ error: "Invalid Credentials" });
  }
});

// @route   GET api/user
// @desc    Get logged in user
// @access  Private
const getUser = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "2d" });
};

module.exports = {
  registerUser,
  loginUser,
  getUser
}