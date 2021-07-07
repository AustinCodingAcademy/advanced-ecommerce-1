const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors');



mongoose.Promise = global.Promise;
mongoose.connect("mongodb://nhbs:Nhbs7178@ds245250.mlab.com:45250/ecommerce-1");

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cors());

const productsRoutes = require("./routes/productsRoutes.js");

app.use(productsRoutes);

app.listen(3001, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now living in apartment 3001");
});