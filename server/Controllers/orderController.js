// Connect to data (i.e. Model)
const Order = require('../Models/orderModel')

module.exports.list = ((req,res)=>{
  Order.find().exec()
  .then(orders=>{
    res.json(orders)
  })
})

module.exports.show = ((req, res)=>{
  console.log(req.params.id)
  Order.findById(req.params.id).exec()
  .then(orders=>{
    res.json(orders)
  })
})

module.exports.create = ((req, res)=>{
  newOrder = new Order ({
    'Product': req.body.Product,
    'Amount': req.body.Amount,
    'ProductId': req.body.ProductId
  })
  
  newOrder.save()
  .then(savedOrder=>{
    res.json(savedOrder)
  })
})

module.exports.update = ((req, res)=>res.json({theId: req.params.id}))

module.exports.remove = ((req, res)=>res.json({}))