const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async (req, res, next) => {
    const { authorization } = req.headers
    let token
    //check headers
    if (authorization && authorization.startsWith('Bearer')) {
        try {
        // Get token from header
        token = authorization.split(' ')[1] // [Bearer, token]
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        // Get user from the token
        req.user = await User.findById(decoded.id).select('-password')

        next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Not authorized')
        }
    }

    if (!token) {
        res.status(401)
        throw new Error('Not authorized, no token')
    }
})

module.exports = { protect }