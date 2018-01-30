$(document).ready(function() {

	$('#submit').on('click', function() {

		$.ajax({
		method: "GET",
		url: "https://api.magicthegathering.io/v1/cards" 
		})
		.done(response=> {
		console.log(response);
		});

	});

});

