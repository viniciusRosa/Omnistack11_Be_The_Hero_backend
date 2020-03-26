const express = require('express')
const routes = express.Router()
const ongcontroller = require('./controllers/OngController')
const incientscontroller = require('./controllers/IncidentController')
const profilecontroller = require('./controllers/ProfileController')
const sessioncontroller = require('./controllers/SessionController')


routes.post('/sessions', sessioncontroller.create)

routes.get('/ongs', ongcontroller.index)
routes.post('/ongs', ongcontroller.create)

routes.post('/incidents', incientscontroller.create)
routes.get('/incidents', incientscontroller.index)
routes.delete('/incidents/:id', incientscontroller.delete)

routes.get('/profile', profilecontroller.index)


module.exports = routes;