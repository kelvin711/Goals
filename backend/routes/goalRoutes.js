const express = require('express');
const router = express.Router();
const { showAllGoals, createGoal, updateGoal, destroyGoal } = require("../controllers/goalController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, showAllGoals);
router.post("/", protect, createGoal);
router.put("/:id", protect, updateGoal);
router.delete("/:id", protect, destroyGoal);

module.exports = router;
