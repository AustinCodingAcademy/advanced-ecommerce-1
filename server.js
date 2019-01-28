const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const keys = require('./keys/keys')
const mongoose = require('mongoose')


const port = process.env.port || 5000


const app = express()

//middleware
app.use(bodyParser.json())

mongoose
  .connect(keys.keys.uri, { useNewUrlParser: true })
  .then(console.log('DB connected'))
  .catch(err=>console.log(err))

app.listen(port, (err)=>{
  if(err){ 
    console.log(err)
  }else{
  console.log(`App is listening on ${port} receiving json content type`)
  }
})

app.use(productRoutes);
app.use(orderRoutes);