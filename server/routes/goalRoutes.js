const { 
    showAllGoals, createGoal, updateGoal, destroyGoal
} = require("../controllers/goalController");

module.exports = app => { //making a function and bringing in app
    app.route("/api/goals").get(showAllGoals).post(createGoal)
    app.route("/api/goals/:id").put(updateGoal).delete(destroyGoal)
}