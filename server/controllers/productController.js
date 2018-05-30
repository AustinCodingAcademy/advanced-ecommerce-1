const Product = require("../models/productModel");

module.exports.list = ((req, res) => {
  Product.find({}).exec()
    .then(product => {
      res.json(product);
    });
});
