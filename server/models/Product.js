const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  reviews: {
    type: Number,
    required: false,
  },
  rating: {
    type: Number,
    required: false,    
  },
  imgUrl: {
    type: String,
    required: false,
  },
  price: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
