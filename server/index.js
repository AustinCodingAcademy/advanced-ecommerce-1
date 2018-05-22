const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Order = require("./order");
const mongoose = require("mongoose");

app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://mimitch:Bladerunner80@ds129560.mlab.com:29560/advanced-homework-1");

let cartContent = [];

function updateData() {
  Order.find({}).exec().then(cartArr => {
    cartContent = [...cartArr];
  });
}
  
updateData();

app.get("/newOrders", function () {
  updateData();
});

let newId = 0;
console.log("cartContent", cartContent);

app.post("/newOrders", function (req, res) { 
  updateData();
  if (cartContent.length > 0) {
    newId = cartContent[cartContent.length - 1]._id + 1;
  } else {
    newId = 1;
  }
  const newOrder = new Order(
    {_id: newId, order: [...req.body]}
  );
  newOrder.save().then(savedOrder => {
    updateData();
    return res.json(savedOrder);
  });
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
