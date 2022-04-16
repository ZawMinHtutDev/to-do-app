const express = require("express");

const app = express();

const toDoController = require("./src/controllers/toDoController");

// static files
app.use(express.static(__dirname + "/public"));

// templating engine
app.set("views", __dirname + "/src/views/");
app.set("view engine", "ejs");

// fire controller
toDoController(app);

// port listen
app.listen(3000, () => {
    console.log("Sever is listening on localhost:3000");
});