const express = require("express");
const app = express();
const router = express.Router();
const { list, show, create } = require("../controllers/ordercontrollers");

router.get("/orders", list);
router.get("/orders/:id", show)
router.post("/orders", create);

module.exports = router;