var db = require('./schema');
var schema = db.Schema;
var mongodb = db.mongodb;

var user = require('../controllers/user');
var activity = require('../controllers/activity');
var code = require('../controllers/code');

module.exports = function(app){

  app.all('*', authen, loadUser);
  // resorces users
  app.get('/users', user.index);
  app.get('/users/sign_up', user.sign_up);

  // resoures activites
  app.get('/activities', activity.index);
  app.get('/activities/:id', activity.show);

  // resoures codes
  app.get('/codes', code.index);
  app.post('/codes', code.create);

  // root
  app.get('/', function(req, res, next){
    res.render('home');
  });


  function authen(req, res, next){
    console.log("authen");
    next();
  }

  function loadUser(req, res, next){
    console.log("next");
    next();
  }

}
