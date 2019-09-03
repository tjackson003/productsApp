// APP.JS

const express = require("express");
const bodyParser = require("body-parser");

// INITIALIZE OUR EXPRESS APP

const app = express();

// DEDICATING PORT NUMBER; TELLING EXPRESS TO LISTEN TO PORT

let port = 3000;

app.listen(port, (e) => {
    if(e) throw e;

    console.log("Server is up and running on port number " + port);
});