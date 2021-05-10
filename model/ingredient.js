const mongoose = require('mongoose')

const ingredientsSchema = new mongoose.Schema({
    bacon: {
        type: Number,
        required: [true, 'Becon is required'],
        default: 0,
        min: [0, 'Minimum amount of bacon you can set is 0']
    },
    cheese: {
        type: Number,
        required: [true, 'cheese is required'],
        default: 0,
        min: [0, 'Minimum amount of cheese you can set is 0']
    },
    salad: {
        type: Number,
        required: [true, 'salad is required'],
        default: 0,
        min: [0, 'Minimum amount of salad you can set is 0']
    },
    meat: {
        type: Number,
        required: [true, 'meat is required'],
        default: 0,
        min: [0, 'Minimum amount of meat you can set is 0']
    }
})

const Ingredients = mongoose.model('ingredients', ingredientsSchema)

module.exports = Ingredients