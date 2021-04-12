const express = require('express');
const controller = require('../controllers/menuBook.controller.js');

const router = express.Router();

router.get('/',controller.index);

module.exports = router;