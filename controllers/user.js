var userModel = require('../models/user');

var index = function(req, res, next){
  user = new userModel.model({
    username: 'rudyboy',
    password: '123456',
    email: 'hanshuaishuai@geekpark.net',
    apiKey: '123456789xxx-heheh'
  });

  user.save();
  res.render('users/index', {
    user: user
  });

}

var show = function(req, res, next){

}

var create = function(req, res, next){

}

var update = function(req, res, next){

}

var sign_up = function(req, res, next){
  render('users/sign_up');
}

exports.index = index;
exports.show = show;
exports.create = create;
exports.update = update;
exports.sign_up = sign_up;
