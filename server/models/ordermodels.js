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
  // items: [schema] - need to create a schema for the items
});

module.exports = mongoose.model("OrderModel", schema);