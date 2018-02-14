//Required dependencies
var express = require("Express");
var ejs = require("ejs");
var bodyParser = require("body-parser");
var app = express();
var mongoose = require("mongoose");
var PORT = process.env.PORT || 3000;
const router = require("./config/routes");
const flash = require('connect-flash');
var passport = require('passport');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');


mongoose.connect("mongodb://localhost/cards");

var db = mongoose.connection;


app.use(morgan('dev')); 
app.use(cookieParser());
app.use(bodyParser()); 


app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));



app.use(session({ secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS' })); 
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 


require('./config/passport')(passport);









app.use(router);

app.listen(PORT, ()=> console.log("API server started on: port 3000"));
