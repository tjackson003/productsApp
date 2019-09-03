const Product = require('../models/product.model');

// SIMPLE VERSION, WITHOUT VALIDATION OR SANITATION

exports.test = function (req, res) {
    res.send("Greetings from the Test controller!");
};