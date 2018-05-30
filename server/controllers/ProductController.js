const Product = require("../models/Product");

module.exports.list = function (request, response) {
  Product.find({})
    .exec()
    .then((products) => {
      return response.json(products);
    });
};

module.exports.show = function (request, response) {
  Product.findById({
    id: request.params.id,
  })
    .exec()
    .then((product) => {
      return response.json(product);
    });
};
