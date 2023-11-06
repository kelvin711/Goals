// goalController.js
const asyncHandler = require('express-async-handler');
const { 
    getGoalsByUser, 
    createGoal, 
    updateGoalById, 
    deleteGoalById 
} = require('../services/goalsService');

module.exports = {
    showAllGoals: asyncHandler(async (req, res) => {
        const goals = await getGoalsByUser(req.user.id);
        res.status(200).json(goals);
    }),

    createGoal: asyncHandler(async (req, res) => {
        if (!req.body.text) {
            res.status(400);
            throw new Error("Please add a text field");
        }
        const goal = await createGoal(req.body.text, req.user.id);
        res.status(200).json(goal);
    }),

    updateGoal: asyncHandler(async (req, res) => {
        const updatedGoal = await updateGoalById(req.params.id, req.body, req.user.id);
        res.status(200).json(updatedGoal);
    }),

    destroyGoal: asyncHandler(async (req, res) => {
        await deleteGoalById(req.params.id, req.user.id);
        res.status(200).json({ id: req.params.id });
    })

};
