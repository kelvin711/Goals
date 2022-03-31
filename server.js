const express = require("express"),
    app = express(),
    colors = require("colors"),
    dotenv = require('dotenv').config(),
    { errorHandler } = require("./server/middleware/errorMiddleware")
    port = process.env.PORT,
    cors = require("cors"),
    connectDB = require("./server/config/db"),
    path = require("path"),
    server = app.listen(port, () => console.log(`all systems firing on port ${port}`));

app.use(cors());//will allow the backend to send and recieve information
app.use(express.json());//parse json data
app.use(express.urlencoded({ extended: true }));//parse string data


connectDB()//running our DB
require("./server/routes/goalRoutes")(app);//injecting the app for our routes
require("./server/routes/userRoutes")(app);
//serve frontend
console.log(__dirname + "\\frontend\\build\\index.html", "*******");
let path1 = path.resolve("frontend", "build")
let path2 = path.resolve("frontend", "build", "index.html")
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path1))

    app.get('*', (req, res) =>
        res.sendFile(path2)
    )
} else {
    app.get('/', (req, res) => res.send('Please set to production'))
}
app.use(errorHandler)
