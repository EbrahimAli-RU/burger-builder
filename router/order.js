const express = require('express')
const router = express.Router()

const authController = require('../controller/authController')
const orderController = require('../controller/orderController')
router.use(authController.protect)

router.post('/', orderController.placeOrder);
router.delete('/:orderId', authController.restrictTo('admin'), orderController.deleteOrder)

module.exports = router