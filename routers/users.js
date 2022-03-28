const express = require('express')
const usersController = require('../controllers/users')
const { checkJwt } = require('../middleware')
const { logger } = require('../middleware')
const router = express.Router()

router.get('/', logger, usersController.getAllUsers)

router.get('/:id', logger, usersController.getUserById)

router.post('/', logger, checkJwt, usersController.createUser)

router.put('/:id', logger, checkJwt, usersController.updateUserById)

router.delete('/:first_name', logger, checkJwt, usersController.deleteUserByFirstName)

module.exports = router