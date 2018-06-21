const express =  require('express');
const router = express.Router();
let {list,show,create,update,remove} = require( '../controllers/productController');

router.get('/products', list);
router.get('/products/:id', show);
router.post('/products', create);
router.put('/products/:id', update);
router.delete('/products/:id', remove);

module.exports =  router;