
var userModel = require('../models/user');

var index = function(req, res, next){
  res.render('users');
}

var show = function(req, res, next){
  User = userModel.model
  User.findOne({ 'username' : 'rudyboy'}, function(err, user){
    if(err){
      return next(err);
    }else{
      res.render('users/show', {
        user: user
      });
    }
  });

}

var create = function(req, res, next){
  var body = req.body;

  var username = body.username;
  var email = body.email;
  var password = body.password;

  user = userModel.model({
    username: username,
    password: password,
    email: email,
    apiKey: 'hehehehehhee'
  });

  req.session.user_id = user.id;

  res.render('users', {
    user: user
  });
}

var update = function(req, res, next){

}

var sign_up = function(req, res, next){
  res.render('users/sign_up');
}

exports.index = index;
exports.show = show;
exports.create = create;
exports.update = update;
exports.sign_up = sign_up;
