var activityModel = require('../models/activity');

var index = function(req, res, next){
  activity = new activityModel.model({
    name: 'gif',
    desc: 'test',
    created_at: new Date(),
    end_at: new Date()
  });
  activity.userId = activity.id;

  activity.save()

  res.render('activities',
  {
    activity: activity
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
