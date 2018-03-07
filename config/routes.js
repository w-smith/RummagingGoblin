//Server file points here, this file tells all incoming front end data where to go.
var express = require("express");
var router = express.Router();
var view = require('../controllers/view_controller.js');
var api = require('../controllers/api_controller.js');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var passport = require("passport");
var usersController = require('../controllers/users');
var staticsController = require('../controllers/statics');



// router.get('/', view.index);

// router.route('/api/cards')
// .get(api.cardSearch);


// Used to manipulate POST methods

function authenticatedUser(req, res, next) {
    // If the user is authenticated, then we continue the execution
    if (req.isAuthenticated()) return next();

    // Otherwise the request is always redirected to the home page
    res.redirect('/');
  }

// home route
router.route('/')
  .get(staticsController.home);
// signup route
router.route('/signup')
  .get(usersController.getSignup)
  .post(usersController.postSignup)
// logout route
router.route('/login')
  .get(usersController.getLogin)
  .post(usersController.postLogin)
// logout
router.route("/logout")
  .get(usersController.getLogout)
// SECRET ROUTE
 router.route("/secret")
   .get(authenticatedUser, usersController.secret)

module.exports = router











module.exports = router;
