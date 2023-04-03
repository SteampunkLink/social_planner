const User = require("../models/User");

const validateNewUser = async (name, email, password) => {
  // make sure all fields exist
  if (!name || !email || !password) {
    return "Please complete all fields" ;
  }
  // make sure email is valid
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!email.match(emailRegex)) {
    return "Email is invalid.";
  }
  // make sure email isn't already in use
  const userExists = await User.findOne({ email });
  if (userExists) {
    return "User already exists.";
  }
  return "";
};

module.exports = {
  validateNewUser
};