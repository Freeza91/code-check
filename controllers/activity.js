var ActivityModel = require('../models/activity')
var Activity = ActivityModel.model
var CodeModel = require('../models/code')
var Code = CodeModel.model

exports.index = function(req, res, next){
  Activity.find({'userId': req.session.user._id},
   function(err, activities){
    if(err){
      return next(err)
    }else if(activities){
      res.render('activities', {
        activities: activities
      })
    }
   })
}

exports.show = function(req, res, next){
  Activity.findOne({'_id': req.params.id, 'userId': req.session.user._id},
     function(err, activity){
      if(err){
        return next(err)
      }else if(activity){
        Code.find({activityId: activity._id},
          function(err, codes){
            res.render('activities/show', {
              activity: activity,
              codes: codes
            })
          })
      }
     })
}

exports.new = function(req, res, next){
  activity = new Activity({
    name: '',
    desc: ''
  })

  res.render('activities/new', {
    activity: activity
  })
}

exports.create = function(req, res, next){
  activity = new Activity(req.body)
  activity.userId = req.session.user._id
  activity.save()

  res.redirect('/activities/' + activity._id)
}

exports.delete = function(req, res, next){
  Activity.findOne({'_id': req.params.id, userId: req.session.user._id},
    function(err, activity){
      if(err){
        return next(err)
      }else if(activity){
        activity.remove()
        res.redirect('/activities')
      }else{
        res.redirect('/activities')
      }
    })
}
