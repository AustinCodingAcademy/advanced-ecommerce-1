const express = require("express");
const router = express.Router();
const {list,show,create,update,remove} = require( "../controllers/productsController.js");


// router.get("/orders", list);
// router.get("/foxes/:id", show);
// router.post("/newOrders", create);
// router.put("/contacts/:id", update);
// router.delete("/contacts/:id", remove);

module.exports = router;