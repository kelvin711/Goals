const { 
    showAllGoals, createGoal, updateGoal, destroyGoal
} = require("../controllers/goalController");
const { protect } = require("../middleware/authMiddleware")

module.exports = app => { //making a function and bringing in app
    app.route("/api/goals").get(protect, showAllGoals).post(protect, createGoal)
    app.route("/api/goals/:id").put(protect, updateGoal).delete(protect, destroyGoal)
}