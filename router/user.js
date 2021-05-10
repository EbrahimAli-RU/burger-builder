const express = require('express')
const router = express.Router()

const authController = require('../controller/authController')

router.route('/signup').post(authController.signup);
router.post('/signin', authController.signIn)
router.post('/forgotpassword', authController.forgotPassword)
router.patch('/resetpassword', authController.resetPassword)
router.patch('/updatepassword', authController.protect, authController.updatePassword)
router.get('/', authController.protect, authController.getAllUsers)

module.exports = router