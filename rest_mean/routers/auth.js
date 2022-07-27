const { Router } = require('express')
const {
	loginUser,
	registerUser,
} = require('../controller/authController')

//Router used for "get","post" methods, etc.
const authRouter = Router()

authRouter.post('/register', registerUser)
module.exports = authRouter
