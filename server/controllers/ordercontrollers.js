const OrderModel = require("../models/ordermodels");

module.exports.list = function (request, response) {
    OrderModel.find({})
        .exec()
        .then((products) => {
            return response.json(products);
    });
};

module.exports.show = function (request, response) {
    OrderModel.findById({
        id: request.params.id,
    })
    .exec()
    .then((product) => {
        return response.json(product);
    });
};

module.exports.create = function (request, response) {
    const newOrder = new Order({
        id: request.body.id || shortid.generate(),
        date: request.body.date,
        items: request.body.items.map((i) => {
            return {
                productId: i.id,
                price: i.price,
            };
        }),
    });
    newOrder.save().then((order) => {
        return response.json(order);
    });
    
}