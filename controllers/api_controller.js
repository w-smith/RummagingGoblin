var request = require('request');

var cards = require("../models/cardModel.js");

// var cardSearch = (req, res) => {
//  request.get({
//         url: "https://api.magicthegathering.io/v1/cards"
//     }, (err, response, body)=>{
//         var jsonBody = JSON.parse(body);
//         res.send(jsonBody);

// });
// };

function cardSearch(req, res) {
	request('https://api.magicthegathering.io/v1/cards', function (error, response, body){
		var parsedJson = JSON.parse(body);
		res.send(parsedJson);
	});
}

module.exports = { cardSearch : cardSearch };


