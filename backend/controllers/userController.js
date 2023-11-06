const asyncHandler = require('express-async-handler');
const UserService = require('../services/usersService');

const UserController = {
    registerUser: asyncHandler(async (req, res) => {
        const { name, email, password } = req.body;
        const user = await UserService.register(name, email, password);
        res.status(201).json(user);
    }),

    loginUser: asyncHandler(async (req, res) => {
        const { email, password } = req.body;
        const user = await UserService.login(email, password);
        res.json(user);
    }),

    getMe: asyncHandler(async (req, res) => {
        const userProfile = await UserService.getProfile(req.user);
        res.status(200).json(userProfile);
    }),
};

module.exports = UserController;
