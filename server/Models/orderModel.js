const mon = require('mongoose')

const schema = require('../Schemas/orderSchema')

module.exports = mon.model('Orders',schema)