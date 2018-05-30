const ProductModel = require("../models/productmodels");

module.exports.list = function (request, response) {
    ProductModel.find({})
        .exec()
        .then((products) => {
            return response.json(products);
    });
};

module.exports.show = function (request, response) {
    ProductModel.findById({
        id: request.params.id,
    })
    .exec()
    .then((product) => {
        return response.json(product);
    });
};