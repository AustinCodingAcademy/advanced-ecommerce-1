const Order = require("../models/Order");
const shortid = require("shortid");

module.exports.list = (request, response) => {
  Order.find({})
    .exec()
    .then((orders) => {
      return response.json(orders);
    });
};

module.exports.show = (request, response) => {
  Order.findById({
    id: request.params.id,
  })
    .exec()
    .then((order) => {
      return response.json(order);
    });
};

module.exports.create = (request, response) => {
  const body = request.body;
  const newOrder = new Order({
    id: body.id || shortid.generate(),
    date: body.date,
    items: body.items.map((i) => {
      return {
        productId: i.id,
        price: i.price,
      };
    }),
  });
  newOrder.save().then((order) => {
    return response.json(order);
  });
};
