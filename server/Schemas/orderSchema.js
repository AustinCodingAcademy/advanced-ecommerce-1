const mon = require('mongoose')

const schema = new mon.Schema({
  Product:{
    required: true,
    type: String
  },
  Amount:{
    required: true,
    type: Number
  },
  ProductId:{
    required: true,
    type: Number
  }
})

module.exports = schema