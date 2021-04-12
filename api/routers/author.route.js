const express = require('express');
const controller = require('../controllers/author.controller.js');

const route = express.Router();

route.get('/',controller.author);

module.exports = route;