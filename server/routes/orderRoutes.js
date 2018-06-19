const express =  require('express');
const router = express.Router();
let {list,show,create,update,remove} = require( '../controllers/orderController');

router.get('/orders', list);
router.get('/orders/:id', show);
router.post('/orders', create);
router.put('/orders/:id', update);
router.delete('/orders/:id', remove);

module.exports =  router;