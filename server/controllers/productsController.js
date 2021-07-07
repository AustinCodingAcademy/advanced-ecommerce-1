
const ProductModel = require("../models/ProductModel.js");

module.exports.list =  function list(req, res) {
    return ProductModel.find({}).exec().then(products => res.json(products));
}
module.exports.show =  function show(req, res) {
return res.json({theId: req.params.id});
}
module.exports.create =  function create(req, res) {
return res.json({});
}
module.exports.update =  function update(req, res) {
return res.json({theId: req.params.id});
}
 module.exports.remove =  function remove(req, res) {
return res.json({});
}