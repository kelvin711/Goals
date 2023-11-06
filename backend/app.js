const express = require('express');
const path = require('path');
const colors = require('colors');
const dotenv =  require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') });
const errorHandler = require('./middleware/errorMiddleware');
const cors = require('cors');
const connectDB = require('./config/db');

console.log(errorHandler);
// Initialize express app
const app = express();

// Connect to Database
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
const goalRoutes = require('./routes/goalRoutes');
const userRoutes = require('./routes/userRoutes');
app.use('/api/goals', goalRoutes);
app.use('/api/users', userRoutes);

// Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../frontend/build/index.html')));
} else {
    app.get('/', (req, res) => res.send('API is running...'));
}

// Error Handler Middleware
app.use(errorHandler);

module.exports = app;
