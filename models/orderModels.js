const mongoose = require("mongoose")
const Schema = mongoose.Schema

const OrderModel = new Schema({
  
  cart:{
    type: Array,
    required: true
  }
  })

module.exports = order = mongoose.model("order", OrderModel)