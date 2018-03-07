var request = require('request');

var cards = require("../models/cardModel.js");

// var cardSearch = (req, res) => {
//  request.get({
//         url: "https://api.magicthegathering.io/v1/cards"
//     }, (err, response, body)=>{
//         var jsonBody = JSON.parse(body);
//         res.send(jsonBody);

// });
// // };
// myButton.addEventListener('click', function() {
	
// 	var x = document.getElementById('input');
// 	var ourRequest = new XMLHttpRequest();
// 	ourRequest.open('GET',
// 		'https://api.magicthegathering.io/v1/cards/'+input.value); 
// 		ourRequest.onload = function() {
// 		var ourData = JSON.parse(ourRequest.responseText);


// 		module.exports = { cardSearch : cardSearch };

// 		}})
