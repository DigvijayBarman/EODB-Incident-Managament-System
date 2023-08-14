const express = require('express')
const route = express.Router()
const services = require('../services/render')
const controller = require('../controller/controller')


route.get('/', services.homeRoutes)

route.get('/active_case', services.active_case)

route.get('/view_case', services.view_case)

route.get('/add_user', services.add_user)

route.get('/update_user', services.update_user)

//api
route.post('/api/users', controller.create)
route.put('/api/users/:id', controller.update)
route.get('/api/users', controller.find)
route.delete('/api/users/:id', controller.delete)

module.exports = route;