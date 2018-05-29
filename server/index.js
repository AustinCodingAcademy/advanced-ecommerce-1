const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
// const fetch = require("node-fetch");
// const fs = require("fs");

app.use(bodyParser.json());
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://ecommerce1:shelby@ds139970.mlab.com:39970/advanced-ecommerce-1");


const checkoutCart = require("./routes/checkoutRoutes");

app.use(checkoutCart);



app.listen(3001, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("web server live @ localhost:3001");
});
