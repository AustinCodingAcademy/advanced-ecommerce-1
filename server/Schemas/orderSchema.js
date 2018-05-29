const mon = require('mongoose')

const schema = new mon.Schema({
  Product:{
    required: false,
    type: String
  },
  Amount:{
    required: false,
    type: Number
  },
  ProductId:{
    required: false,
    type: Number
  }
})

module.exports = schema