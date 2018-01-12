'use strict';
module.exports = function(app) {
  var cardlist = require('../controllers/controller');

  // todoList Routes
  app.route('/card')
    .get(cardList.list_all_cards);



};
