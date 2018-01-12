

var mongoose = require('mongoose'),
  Card = mongoose.model('Cards');

exports.list_all_cards = function(req, res) {
  Card.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(card);
  });
};