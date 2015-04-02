var db = require('./schema');
var schema = db.Schema;
var mongodb = db.mongodb;

var user = require('../controller/user');

module.exports = function(app){

  // resorces users
  app.get('/users', user.index);
  app.get('/users/sign_up', user.sign_up);

  // root
  app.get('/', function(req, res, next){
    res.render('home');
  });

}
