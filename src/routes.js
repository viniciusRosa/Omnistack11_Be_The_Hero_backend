const express = require('express')
const routes = express.Router()
const ongcontroller = require('./controllers/OngController')


routes.get('/ongs', ongcontroller.index)
routes.post('/ongs', ongcontroller.create)

module.exports = routes;