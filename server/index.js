const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const Order = require("./order");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://mimitch:Bladerunner80@ds129560.mlab.com:29560/advanced-homework-1");

// const orders = [];


app.post("/newOrders", function (req, res) { 
//   console.log(req.body);
  const newOrder = new Order(
    {order: [...req.body]}
  );
  newOrder.save().then(savedOrder => {
    // console.log(savedOrder);
    return res.json(savedOrder);
  });
});






const port = 3001;

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
