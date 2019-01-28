const express = require("express");
const routes = express.Router();

const { list, create } = require("../controllers/orderController");

routes.get("/orders", list);
routes.post("/orders", create)


module.exports = routes;
