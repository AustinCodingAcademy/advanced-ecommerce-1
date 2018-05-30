const express = require("express");
const app = express();
const { list, show, create } = require("../controllers/productcontrollers");

router.get("/products", list);
router.get("/products/:id", show)
router.post("/products", create);

module.exports =  router;