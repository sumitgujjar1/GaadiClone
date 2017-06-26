
// Dependencies
var express = require('express');
var router = express.Router();

//Product
var Car = require('../models/car');
Car.methods(['get', 'put', 'post', 'delete']);
Car.register(router, '/cars');


// Return router
module.exports = router;

	