// APP.JS

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const product = require('./routes/product.route'); // IMPORTS ROUTES FOR THE PRODUCTS

// INITIALIZE OUR EXPRESS APP

const app = express();

app.use('/products', product);

// DEDICATING PORT NUMBER; TELLING EXPRESS TO LISTEN TO PORT

let port = 3000;

app.listen(port, (e) => {
    if(e) throw e;

    console.log("Server is up and running on port number " + port);
});