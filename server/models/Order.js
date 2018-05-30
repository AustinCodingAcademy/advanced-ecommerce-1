const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  }
});

const orderSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  items: [orderItemSchema]
});

module.exports = mongoose.model("Order", orderSchema);
