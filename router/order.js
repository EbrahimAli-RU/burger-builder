const express = require('express')
const router = express.Router()

const authController = require('../controller/authController')
const orderController = require('../controller/orderController')
router.use(authController.protect)

router.route('/').post(orderController.placeOrder).get(authController.restrictTo('admin'), orderController.getAllOrders);
router.delete('/:orderId', authController.restrictTo('admin'), orderController.deleteOrder)
router.get('/:userId', orderController.getSpecficUserOrder)

module.exports = router