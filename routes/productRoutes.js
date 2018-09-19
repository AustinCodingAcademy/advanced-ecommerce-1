const express = require("express");
const routes = express.Router()

const { list, create } = require("../controllers/productController")


routes.get('/products', list)
routes.post("/products", create);

module.exports = routes

