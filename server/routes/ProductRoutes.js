const express = require("express");
const router = express.Router();
const path = "/products";
const {
  list,
  show,
} = require("../controllers/ProductController");

router.get(path, list);
router.get(path + "/:id", show);

module.exports = router;
