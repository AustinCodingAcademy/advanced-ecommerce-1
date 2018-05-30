const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  }
});

const orderSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  items: [orderItemSchema]
});

module.exports = mongoose.model("Order", orderSchema);
