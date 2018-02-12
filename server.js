//Required dependencies
var express = require("Express");
var ejs = require("ejs");
var bodyParser = require("body-parser");
var app = express();
var mongoose = require("mongoose");
var PORT = process.env.PORT || 3000;
const router = require("./config/routes");


mongoose.connect("mongodb://localhost/cards");

var db = mongoose.connection;

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));









app.use(router);

app.listen(PORT, ()=> console.log("API server started on: port 3000"));
