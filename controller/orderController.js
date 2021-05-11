const catchAsync = require('../utils/catchAsync')
const appError = require('../utils/appError')
const Order = require('../model/order')

exports.placeOrder = catchAsync(async (req, res, next) => {
    if (!req.body.user) req.body.user = req.user._id
    const order = await Order.create(req.body)

    res.status(201).json({
        status: 'success',
        data: {
            order
        }
    })
})

exports.deleteOrder = catchAsync(async (req, res, next) => {
    const order = await Order.findByIdAndDelete(req.params.orderId)

    res.status(204).json({
        status: 'success',
        data: {
            order
        }
    })
})

exports.getSpecficUserOrder = catchAsync(async (req, res, next) => {
    const order = await Order.find({ user: req.params.userId })

    res.status(200).json({
        status: 'success',
        data: {
            order
        }
    })
})

exports.getAllOrders = catchAsync(async (req, res, next) => {
    const order = await Order.find()

    res.status(200).json({
        status: 'success',
        data: {
            order
        }
    })
})