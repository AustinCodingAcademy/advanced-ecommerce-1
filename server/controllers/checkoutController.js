const Checkout = require("../models/checkoutModel");

module.exports.list = ((req, res) => {
  Checkout.find({}).exec()
    .then(checkout => {
      res.json(checkout);
    });
});

module.exports.show = ((req, res) => {
  Checkout.findById({_id: req.params.id}).exec()
    .then(checkoutItems => {
      res.json(checkoutItems); 
    });
});

module.exports.create = ((req, res) => {
  const newOrder = new Checkout({
    checkout: req.body.checkout
  });
  newOrder.save()
    .then(savedOrder => {
      res.json(savedOrder);
    });
});
