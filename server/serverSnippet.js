const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.json());

mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://mimitch:Bladerunner80@ds129560.mlab.com:29560/advanced-homework-1");

app.get("/", function () {

});

app.post("/", function (req, res) { 

});

const port = 3001; // easily change port #

app.listen(port, (err) => {
  if (err) {
    return console.log("Error", err);
  } 
  console.log("Web server is now running on port " + port);
});

// <-----------handle bad request------------->
app.use(function (request,response) {
  response.send("NOPE!!!!");
});
