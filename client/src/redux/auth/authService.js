import axios from "axios";

const API_URL = `/api/user/`;

const saveAndReturnUserData = async (route, data) => {
  const response = await axios.post(API_URL + route, data);
  if (response.data) { localStorage.setItem("user", JSON.stringify(response.data)) };
  return response.data;
};

// Register
const register = async (userData) => {
  return await saveAndReturnUserData("register", userData);
};

// Login
const login = async (userData) => {
  return await saveAndReturnUserData("login", userData);
};

// Logout
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;