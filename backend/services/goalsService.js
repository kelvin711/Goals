const Goal = require("../models/goalModel");

const getGoalsByUser = async (userId) => {
    return await Goal.find({ user: userId });
};

const createGoal = async (text, userId) => {
    return await Goal.create({
        text: text,
        user: userId
    });
};

const updateGoalById = async (goalId, updateData, userId) => {
    const goal = await Goal.findById(goalId);

    if (!goal) {
        throw new Error("Goal not found");
    }

    if (goal.user.toString() !== userId) {
        throw new Error("User not authorized");
    }

    return await Goal.findByIdAndUpdate(goalId, updateData, { new: true });
};

const deleteGoalById = async (goalId, userId) => {
    const goal = await Goal.findById(goalId);

    if (!goal) {
        throw new Error("Goal not found");
    }

    if (goal.user.toString() !== userId) {
        throw new Error("User not authorized");
    }

    await goal.remove();
    return goalId;
};

module.exports = {
    getGoalsByUser,
    createGoal,
    updateGoalById,
    deleteGoalById,
};
