const { 
    registerUser, loginUser, getMe
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware")

module.exports = app => { //making a function and bringing in app
    app.post("/api/users/login", loginUser)
    app.get("/api/users/me", protect, getMe)
    app.post("/api/users", registerUser)
}