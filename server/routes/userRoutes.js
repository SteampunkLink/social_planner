const express = require("express");
const { protect } = require("../utils/middleware");
const { registerUser, loginUser, getUser } = require("../controllers/userCtr");
const router = express.Router();

router.get("/", protect, getUser);
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;