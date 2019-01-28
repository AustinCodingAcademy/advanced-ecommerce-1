const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ProductModel = new Schema({
  id:{ 
      type: Number,
      required: true
    },
  name:{ 
      type: String,
      required: true
    },
  description:{ 
      type: String,
      required: true
    },
  reviews:{
      type: Number,
      required: true
    },
  rating:{ 
      type: Number,
      required: true
      },
  imgUrl:{ 
      type: String,
      required: true
      },
  price:{ 
      type: String,
      required: true
      }
})

module.exports = product = mongoose.model("product", ProductModel)