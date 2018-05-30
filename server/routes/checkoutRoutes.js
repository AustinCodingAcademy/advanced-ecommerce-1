const express = require("express");
const router = express.Router();
const { list, create } = require("../controllers/checkoutController");

router.get("/checkout", list);
router.post("/checkout", create);

module.exports = router;
