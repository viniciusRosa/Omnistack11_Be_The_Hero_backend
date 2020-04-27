const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const routes = express.Router();
const ongcontroller = require('./controllers/OngController');
const incientscontroller = require('./controllers/IncidentController');
const profilecontroller = require('./controllers/ProfileController');
const sessioncontroller = require('./controllers/SessionController');


routes.post('/sessions', sessioncontroller.create);

routes.get('/ongs', ongcontroller.index);

routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.number().required().min(10),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2)
  })
}), ongcontroller.create);

routes.post('/incidents', incientscontroller.create);

routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number()
  })
}), incientscontroller.index);

routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  })
}), incientscontroller.delete);

routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown()
}), profilecontroller.index);

module.exports = routes;