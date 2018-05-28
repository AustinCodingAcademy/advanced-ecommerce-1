const express = require('express')
const router = express.Router()
// Router variables that should match the controller
const { list,show,create,update,remove } = require('../Controllers/orderController')

// Use whatever method you need (get, post, etc)
router.get('/orders', list)
router.get('/orders/:id', show)
router.post('/orders', create)
router.put('/orders/:id', update)
router.delete('/orders/:id', remove)

module.exports = router