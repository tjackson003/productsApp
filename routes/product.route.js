// REQUIRE EXPRESS

const express = require('express');
const router = express.Router();

// REQUIRE CONTROLLERS

const product_controller = require('../controllers/product.controller');

// TEST URL TO CHECK IF ALL FILE ARE COMMUNICATING CORRECTLY

router.get('/test', product_controller.test);

// EXPORT ROUTER

module.exports = router;