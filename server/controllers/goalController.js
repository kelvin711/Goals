const asyncHandler = require('express-async-handler')
const Goal = require("../models/goalModel")

module.exports = {
    showAllGoals: asyncHandler(async (req, res) => {
        const goals = await Goal.find()
        res.status(200).json(goals)
    }),

    createGoal: asyncHandler(async (req,res) => { //create is the restful pattern
        if (!req.body.text) {
            res.status(400)
            throw new Error("Please add a text field")
        }
        const goal = await Goal.create(req.body)
        res.status(200).json(goal)
    }),

    updateGoal: asyncHandler(async (req, res) => {
        const goal = await Goal.findById(req.params.id)
        if(!goal) {
            res.status(400)
            throw new Error("Goal not found")
        }
        const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedGoal)
    }), 

    destroyGoal: asyncHandler(async (req, res) => {
        const goal = await Goal.findById(req.params.id)
        if(!goal) {
            res.status(400)
            throw new Error("Goal not found")
        }
        await goal.remove()
        res.status(200).json({id: req.params.id})
    }),

    showOneGoal: asyncHandler(async (req, res) => {
        const goal = await Goal.findById(req.params.id)
        if(!goal) {
            res.status(400)
            throw new Error("Goal not found")
        }
        res.status(200).json(goal)
    }),
    
}