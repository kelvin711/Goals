const express = require("express"),
    app = express(),
    port = 8000,
    cors = require("cors"),
    server = app.listen(port, () => console.log(`all systems firing on port ${port}`));

app.use(cors());//will allow the backend to send and recieve information
app.use(express.json());//parse json data
app.use(express.urlencoded({extended:true}));//parse string data

require("./server/config/database.config");//getting from the config file
require("./server/routes/product.routes")(app);//injecting the app
//injecting the route into the server