//Required dependencies
const express = require("express"),
//Object to represent the express application
app = express(),
port = process.env.PORT || 3000;

app.listen(port);

console.log('API server started on: ' + port);

//Required dependencies
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


