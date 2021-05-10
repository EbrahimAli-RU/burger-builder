const Ingredient = require('../model/ingredient')
const catchAsync = require('../utils/catchAsync')
const appError = require('../utils/appError')

exports.setIngredient = catchAsync(async (req, res, next) => {
    const ingredient = await Ingredient.create(req.body)

    res.status(201).json({
        status: 'success',
        data: {
            ingredient
        }
    })
})

exports.getIngredient = catchAsync(async (req, res, next) => {
    const ingredient = await Ingredient.find()

    res.status(200).json({
        status: 'success',
        data: {
            ingredient
        }
    })
})
exports.updateIngredient = catchAsync(async (req, res, next) => {
    const ingredient = await Ingredient.findByIdAndUpdate(req.params.ingId)

    res.status(200).json({
        status: 'success',
        data: {
            ingredient
        }
    })
})
exports.deleteIngredient = catchAsync(async (req, res, next) => {
    const ingredient = await Ingredient.findByIdAndDelete(req.params.ingId)

    res.status(204).json({
        status: 'success',
        data: {
            ingredient
        }
    })
})