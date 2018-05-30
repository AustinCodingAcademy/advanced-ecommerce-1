const Checkout = require("../models/checkoutModel");

module.exports.list = ((req, res) => {
  Checkout.find({}).exec()
    .then(checkout => {
      res.json(checkout);
    });
});


module.exports.create = ((req, res) => {
  const newOrder = new Checkout(req.body.cart);
  newOrder.save()
    .then(savedOrder => {
      res.json(savedOrder);
    });
});
