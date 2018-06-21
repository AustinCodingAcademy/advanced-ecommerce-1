const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://kkannen:ecommerce1@ds163330.mlab.com:63330/e-commerce-kkannen");

app.use(require("./routes/orderRoutes"))
app.use(require("./routes/productRoutes"))

app.listen(3002, (err) => {
if (err) {console.log('Error', err);}
console.log('server running');
});