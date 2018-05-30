const mongoose = require("mongoose");

const schema = new mongoose.Schema({
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

module.exports = mongoose.model("OrderModel", schema);