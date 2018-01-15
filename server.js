//Required dependencies
const express = require("express");
//Object to represent the express application
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/cards");

var db = mongoose.connection;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));


// app.get("/", function(req, res){
// 	res.send("hey bitches");

// });



// var button = document.getElementById("submit");

// button.addEventListener('click', function() {
// 	var x = document.getElementById('input');
// 	var cardRequest = new XMLHttpRequest();
// 	cardRequest.open('GET', "http://api.magicthegathering.io/v1/cards?" + x.value);
//   wordInput = x.value; 
// 	ourRequest.onload = function() {
// 		var ourData = JSON.parse(cardRequest.responseText);
// 		renderHTML(ourData);

// 	};
// 	cardRequest.send();

// 	console.log(ourData);
// });




app.listen(3000);

console.log("API server started on: port 3000");