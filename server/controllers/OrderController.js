const Order = require("../models/Order");
const shortid = require("shortid");

module.exports.list = function (request, response) {
  Order.find({})
    .exec()
    .then((orders) => {
      return response.json(orders);
    });
};

module.exports.show = function (request, response) {
  Order.findById({
    id: request.params.id,
  })
    .exec()
    .then((order) => {
      return response.json(order);
    });
};

module.exports.create = function (request, response) {
  const body = request.body;
  const newOrder = new Order({
    id: body.id || shortid.generate(),
    date: body.date,
    items: body.items,
  });
  newOrder.save().then((order) => {
    return response.json(order);
  });
};
