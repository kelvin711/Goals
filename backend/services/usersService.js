const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require("../models/userModel");

// Helper to generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d', });
};

const UserService = {
    async register(name, email, password) {
        if (!name || !email || !password) {
            throw new Error('Please add all fields');
        }

        const userExists = await User.findOne({ email });
        if (userExists) {
            throw new Error('User already exists');
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        if (!newUser) {
            throw new Error('Invalid user data');
        }

        return {
            _id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            token: generateToken(newUser._id),
        };
    },

    async login(email, password) {
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            throw new Error('Invalid credentials');
        }

        return {
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        };
    },

    async getProfile(user) {
        // Assuming `user` is the user object added by the `protect` middleware
        return user;
    },
};

module.exports = UserService;
