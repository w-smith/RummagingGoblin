//Server file points here, this file tells all incoming front end data where to go.
var express = require("express");
var router = express.Router();
var view = require('../controllers/view_controller.js');
var api = require('../controllers/api_controller.js');




router.get('/', view.index);

router.route('/api/cards')
.get(api.cardSearch);





module.exports = router;