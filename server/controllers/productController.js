 Product = require("../models/productModel")

module.exports.list =  function list(request, response) {
    Product.find().exec()
    .then(products => {
        response.json(products)
    })
}
module.exports.show =  function show(request, response) {
    Product.findById(request.params.id).exec()
    .then(products => {
        response.json(products)
    })
}
module.exports.create =  function create(request, response) {
    newProduct = new Product ({
        "ProductID": request.body.ProductID,
        "Product": request.body.Product,
        "Amount": request.body.Amout
    })
    newProduct.save().then(savedProduct => {
        response.json(savedProduct)
    })
}

module.exports.update =  function update(request, response) {
    return response.json({theId: request.params.id});
}
module.exports.remove =  function remove(request, response) {
    return response.json({});
}