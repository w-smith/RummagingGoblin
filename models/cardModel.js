var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CardSchema = new Schema({
  name: String,
  colors: String,
  types: String,
  rarity: String,
  CMC: Number,
  Set: String


});

var Card = mongoose.model('Cards', CardSchema);




module.exports = Card;