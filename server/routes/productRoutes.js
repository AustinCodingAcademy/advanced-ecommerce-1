const express = require("express");
const router = express.Router();
const { list, create } = require("../controllers/productController");

router.get("/producst", list);
router.post("/products", create);

module.exports = router;
