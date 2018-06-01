const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    required: false,
    type: String
  },
  description: {
    required: false,
    type: String
  },
  reviews: {
    required: false,
    type: String
  },
  rating: {
    required: false,
    type: String
  },
  imgUrl: {
    required: false,
    type: String
  },
  price: {
    required: false,
    type: String
  },
});

module.exports = mongoose.model("Product", schema);