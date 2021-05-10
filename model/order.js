const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    ingredient: {
        bacon: {
            type: Number,
            required: [true, 'Becon is required'],
        },
        cheese: {
            type: Number,
            required: [true, 'cheese is required'],
        },
        salad: {
            type: Number,
            required: [true, 'salad is required'],
        },
        meat: {
            type: Number,
            required: [true, 'meat is required'],
        }
    },
    orderData: {
        name: {
            type: String,
            trim: true,
            required: [true, 'name is required']
        },
        email: {
            type: String,
            required: [true, 'Email is required']
        },
        deliveryMethod: {
            type: String,
            enum: ['cheapest', 'fastest'],
            required: [true, 'Delivery Method is required']
        },
        street: {
            type: String,
            required: [true, 'Street is required']
        },
        zipCode: {
            type: Number,
            required: [true, 'Zip Code is required'],
            minlength: [5, 'length must be 5'],
            maxlength: [5, 'length must be 5']
        }
    },
    price: {
        type: Number,
        required: true,
        set: val => Math.round(val * 10) / 10
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'user'
    }
})

const Order = mongoose.model('order', orderSchema)

module.exports = Order