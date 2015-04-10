var CodeModel = require('../models/code')
var Code = CodeModel.model
var ActivityModel = require('../models/activity')
var Activity = ActivityModel.model
var key = require('../middlewares/key')

exports.create = function(req, res, next){

  Activity.findOne({'_id': req.params.id, userId: req.session.user._id},
    function(err, activity){
      if(err){
        return next(err)
      }else if(activity){
        code = new Code({
          created_at: new Date(),
          codeValue: key.genCode(),
          is_actived: false
        })
        code.activityId = activity._id
        code.save()
        res.json({ msg: 'success' })
      }else{
        res.send("can't found activity, you should new one")
      }
    })
}

exports.active = function(req, res, next){
  var msg = ''
  Activity.findOne({'_id': req.params.id, userId: req.session.user._id},
    function(err, activity){
      if(err){
        res.send('errr')
        return next(err)
      }else if(activity){
        Code.findOne({codeValue: req.query.codeValue},
          function(err, code){
            if(err){
              return next(err)
            }else if(code && !code.is_actived){
              code.is_actived = true
              code.actived_at = new Date()
              code.save()
              msg = '验证码成功激活'
              res.render('codes/active', {
                msg: msg
              })
            }else if(code && code.is_actived){
              msg = '验证码已经成功激活'
              res.render('codes/active', {
                msg: msg
              })
            }else{
              msg = '验证码错误'
              res.render('codes/active', {
                msg: msg
              })
            }
          })
      }else{
        msg = '没有权限验证'
        res.render('codes/active', {
          msg: msg
        })
      }
    })
}