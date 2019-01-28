const order = require("../models/orderModels")

module.exports.list = function (req, res) {
  order.find({}, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.send(data)
    }
  }
  )
}
module.exports.create = function(req, res) {
  const newOrder = new order({
    cart: req.body.cart
  })
  newOrder.save().then(order=>res.json(order))
}
