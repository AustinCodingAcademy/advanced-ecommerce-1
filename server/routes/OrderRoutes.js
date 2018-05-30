const express = require("express");
const router = express.Router();
const path = "/orders";
const {
  list,
  show,
  create,
} = require("../controllers/OrderController");

router.get(path, list);
router.get(path + "/:id", show);
router.post(path, create);

module.exports = router;
