const express = require("express"),
    app = express(),
    colors = require("colors"),
    dotenv = require('dotenv').config(),
    { errorHandler } = require("./server/middleware/errorMiddleware")
    port = process.env.PORT,
    cors = require("cors"),
    server = app.listen( port, () => console.log(`all systems firing on port ${port}`));

//app.use("/api/goals", require("./server/routes/goalRoutes"))

// app.get("/api/goals", (req, res) => {
//     res.status(200).json({ message: "Goals" })
// })
app.use(cors());//will allow the backend to send and recieve information
app.use(express.json());//parse json data
app.use(express.urlencoded({extended:true}));//parse string data

// require("./server/config/database.config");//getting from the config file
require("./server/routes/goalRoutes")(app);//injecting the app for our routes
app.use(errorHandler)
// //injecting the route into the server