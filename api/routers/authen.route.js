const express = require('express');
const controller = require('../controllers/authen.controller.js');

const route = express.Router();

route.post('/',controller.authen);
route.post('/register',controller.register);

module.exports = route;