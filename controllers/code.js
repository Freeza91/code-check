var codeModel = require('../models/Code');

var generateCode = function(){
  return "xxxxxxx-hehhehehe";
}

var index = function(req, res, next){
  code = new codeModel.model({
    created_at: new Date(),
    actived_at: new Date(),
    codeValue: generateCode(),
    is_actived: false
  });

  code.activityId = code.id;
  code.save();

  res.render('codes', {
    code: code
  });
}

var show = function(req, res, next){

}

var create = function(req, res, next){

}

var update = function(req, res, next){

}

var sign_up = function(req, res, next){
}

exports.index = index;
exports.show = show;
exports.create = create;
exports.update = update;
