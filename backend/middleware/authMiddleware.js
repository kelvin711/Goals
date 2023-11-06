const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// Function to extract the JWT token from the request header
const getTokenFrom = (authorization) => {
    if (authorization && authorization.startsWith('Bearer ')) {
        return authorization.split(' ')[1]; // [Bearer, token]
    }
    return null;
};

const protect = asyncHandler(async (req, res, next) => {
    const token = getTokenFrom(req.headers.authorization);

    if (!token) {
        res.status(401);
        throw new Error('Not authorized, no token provided');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');
        next();
    } catch (error) {
        console.error(error);
        res.status(401);
        throw new Error('Not authorized, token failed');
    }
});

module.exports = { protect };
