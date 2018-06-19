const Order = require("../models/orderModel")

module.exports.list =  function list(request, response) {
    Order.find().exec()
    .then(orders => {
        response.json(orders)
    })
}
module.exports.show =  function show(request, response) {
    Order.findById(request.params.id).exec()
    .then(orders => {
        response.json(orders)
    })
}
module.exports.create =  function create(request, response) {
    newOrder = new Order ({
        "ProductID": request.body.ProductID,
        "Product": request.body.Product,
        "Amount": request.body.Amout
    })
    newOrder.save().then(savedOrder => {
        response.json(savedOrder)
    })
}

module.exports.update =  function update(request, response) {
    return response.json({theId: request.params.id});
}
module.exports.remove =  function remove(request, response) {
    return response.json({});
}