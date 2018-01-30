const request = require('request');

var cards = require("../models/cardModel.js");

const cardSearch = (req, res) => {

request({
        url: "https://api.magicthegathering.io/v1/cards" 
    	
    });
};

module.exports = cardSearch;


