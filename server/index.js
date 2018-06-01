const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.json());

app.use(require("./routes/orderroutes"));
app.use(require("./routes/productroutes"));

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://aeadmin1:aeadmin1@ds135540.mlab.com:35540/advanced-ecommerce-1");

app.listen(3001, (err) => {
    if (err) {
      return console.log("Error", err);
    } 
    console.log("Web server is now running on port 3001");
  });