var db = require('./schema');
var schema = db.Schema;
var mongodb = db.mongodb;

var user = require('../models/user');

module.exports = function(app){

  app.get('/', function(req, res, next){
    res.send("hello world node js");
  });

  // resorces users
  // app.get('/users', function(req, res, next){
  //   res.render('users/index', { title: "hello node js" } );
  // });

  app.get('/users', function(req, res, next){
    userModel = user.model;
    var user1 = new userModel( { username: 'user1'});
    console.log(user1);

    res.render('users/index', { user: user1 });
  });

  //sign_up
  app.get('/users/sign_up', function(req, res, next){
    res.render('users/sign_up');
  });



}
