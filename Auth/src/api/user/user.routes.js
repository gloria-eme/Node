const UserRoutes = require('express').Router()

const { register, login, getUsers, deleteUser } = require('./user.controller')

UserRoutes.post('/register', register)
UserRoutes.post('/login', login)
UserRoutes.get("/",  getUsers)
UserRoutes.delete("/:id", deleteUser)

module.exports = UserRoutes