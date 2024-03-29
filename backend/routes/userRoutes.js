const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getMe } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.post("/login", loginUser);
router.get("/me", protect, getMe);
router.post("/", registerUser);

module.exports = router;