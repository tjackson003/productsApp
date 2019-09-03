// REQUIRE EXPRESS

const express = require("express");
const router = express.Router();

// REQUIRE CONTROLLERS

const productController = require("../controllers/product.controller");

// TEST URL TO CHECK IF ALL FILE ARE COMMUNICATING CORRECTLY

router.get("/test", productController.test);

// EXPORT ROUTER

module.exports = router;