	// url: "https://api.magicthegathering.io/v1/cards" 


	myButton.addEventListener('click', function() {
	
		var x = document.getElementById('input');
		var ourRequest = new XMLHttpRequest();
		ourRequest.open('GET',
		"https://api.magicthegathering.io/v1/cards"); 
	})