const product = require("../models/productModels")

module.exports.list = function(req, res){
  product.find({}, (err, data)=>{
    if(err){
      console.log(err)
    }else{
      res.send(data)
    }
  })
}

module.exports.create = function (req, res) {
  const newProduct = new product({
    id: req.body.id,
    name: req.body.name,
    description: req.body.description,
    reviews: req.body.reviews,
    rating: req.body.rating,
    imgUrl: req.body.imgUrl,
    price: req.body.price
  })
  newProduct.save().then(product => res.json(product))
}