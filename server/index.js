const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://fp1admin:fp1admin@ds237770.mlab.com:37770/aca311-final-project");

app.listen(3001, (err) => {
    if (err) {
      return console.log("Error", err);
    } 
    console.log("Web server is now running on port 3001");
  });