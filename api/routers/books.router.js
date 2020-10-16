const express = require('express');
const controller = require('../controllers/books.controller.js');

const router = express.Router();

router.get('/', controller.index);

module.exports = router;