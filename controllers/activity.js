var ActivityModel = require('../models/activity')
var Activity = ActivityModel.model
var CodeModel = require('../models/code')
var Code = CodeModel.model

exports.index = function(req, res, next){
  Activity.paginate({ userId: req.session.user._id },
                    req.query.page, req.query.limit,
     function(err, pageCount, activities, itemCount){
      if(err){
        return next(err)
      }else if(!activities){
        res.render('notify/notify', {
          msg: '不存在'
        })
      }else {
        res.render('activities', {
          activities: activities,
          pageCount:  pageCount
        })
      }
   })
}

exports.show = function(req, res, next){
  if(req.params.id.length != 24){
    return res.send('notify/notify', {
      msg: '不存在'
    })
  }
  Activity.findOne({'_id': req.params.id, 'userId': req.session.user._id},
     function(err, activity){
      if(err){
        return next(err)
      }else if(!activity){
        res.render('notify/notify', {
          msg: '不存在'
        })
      }else{
        Code.paginate({activityId: activity._id}, req.query.page, req.query.limit,
          function(err, pageCount, codes, itemCount){
            if(err){
              return next(err)
            }
            res.render('activities/show', {
              activity: activity,
              codes: codes,
              pageCount: pageCount
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
      }else if(!activity){
        res.redirect('/activities')
      }else{
        activity.remove()
        res.redirect('/activities')
      }
    })
}
