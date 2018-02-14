$(document).ready(function() {

	$('#myButton').on('click', function(event) {
event.preventDefault();

	$.get('api/cards').done(function(postCards){
		console.log('post test');

		$('#output').append(postCards.cards.name);

	});

		// $.ajax({
		// method: "GET",
		// url: "https://api.magicthegathering.io/v1/cards" 
		// })
		// .done(response=> {
		// console.log(response);
		// });

	});

});

