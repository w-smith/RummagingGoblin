

var mongoose = require('mongoose'),
  Card = mongoose.model('Cards');


// function cardList(req, res){
// 	// console.log(env.apiKey);
// 	let url = "https://api.magicthegathering.io/v1/cards" + req.query.beerinfo + "&key=" + env.apiKey + "&format=json&withBreweries=Y";
// 			request(url, function(req, res, body){
					
// 				// if (body.totalResults){

// 				let result = JSON.parse(body);
// 				let beer = {
// 					name: result.data[0].name,
// 					abv: result.data[0].abv,
// 					style: result.data[0].style.shortName,
// 					brewery: result.data[0].breweries[0].name

// 				};
// 					console.log(beer);
// 				let beerDb = new Listbeer();
					
// 					beerDb.name= result.data[0].name,
// 					beerDb.abv= result.data[0].abv,
// 					beerDb.style= result.data[0].style.shortName,
// 					beerDb.brewery= result.data[0].breweries[0].name

// 				beerDb.save();



// 					sendResponse(beer);

				
// 				// console.log(result.data[0].name);
// 				// console.log(result.data[0].abv);
// 				// console.log(result.data[0].breweries[0].name);
// 				// } else {
// 				// 	sendResponse('The beer you wanted is unavailable');
// 				// }	// // console.log(typeof(result));
// 			})		

// 			function sendResponse(beer){
// 				res.send(beer);
// 			}