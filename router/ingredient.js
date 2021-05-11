const express = require('express')
const router = express.Router()

const authController = require('../controller/authController')
const ingredientController = require('../controller/ingredientController')
router.get('/', ingredientController.getIngredient)
router.use(authController.protect, authController.restrictTo('admin'))
router.route('/').post(ingredientController.setIngredient)


router.route('/:ingId')
    .patch(ingredientController.updateIngredient)
    .delete(ingredientController.deleteIngredient)

module.exports = router