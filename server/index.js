const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Order = require("./order");
const mongoose = require("mongoose");

app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://mimitch:Bladerunner80@ds129560.mlab.com:29560/advanced-homework-1");

let newId = 1;
app.post("/newOrders", function (req, res) { 
  const newOrder = new Order(
    {_id: newId, order: [...req.body]}
  );
  newOrder.save().then(savedOrder => {
    return res.json(savedOrder);
  });
  newId++;
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
