const express = require("express"),
    app = express(),
    colors = require("colors"),
    dotenv = require('dotenv').config(),
    { errorHandler } = require("./server/middleware/errorMiddleware")
    port = process.env.PORT,
    cors = require("cors"),
    connectDB = require("./server/config/db"),
    server = app.listen( port, () => console.log(`all systems firing on port ${port}`));

app.use(cors());//will allow the backend to send and recieve information
app.use(express.json());//parse json data
app.use(express.urlencoded({extended:true}));//parse string data


connectDB()//running our DB
require("./server/routes/goalRoutes")(app);//injecting the app for our routes
require("./server/routes/userRoutes")(app);
app.use(errorHandler)
