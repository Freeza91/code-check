var UserModel = require('../models/user')
var User = UserModel.model
var key =  require('../middlewares/key')

//注册页面
exports.sign_up = function(req, res, next){
  var user = new User({
    email: '',
    password: '',
    username: ''
  })
  res.render('users/sign_up', {
    user: user
  })
}
//创建用户
exports.create = function(req, res, next){
  user = new User(req.body)
  user.apiKey = key.genApiKey()

  user.save()

  res.redirect('activities')
}

exports.show = function(req, res, next){
  var id = req.params.id
  if(id.length != 24){
    return res.render('notify/notify', {
      msg: '不存在'
    })
  }
  User.findOne( { _id: id } , function(err, user){
    if(err){
      // return res.send('mongoose id is valid')
      return next(err)
    }else{
      if(!user){
        res.send("can't found user in my database")
      }else{
        res.render('users/show', {
          user: user
        })
      }
    }
  })
}

exports.edit = function  (req, res, next) {
  user = req.session.user
  if(!user){
    res.send("you haven't logined yet!")
  }else{
    res.render('users/edit', {
      user: user
    })
  }
}

exports.update = function(req, res, next){
  var user = req.session.user
  User.findOne({'_id': user._id}, function(err, user){
    if(!user){
      res.send('can not find this user')
    }else{
      var body = req.body
      user.username = body.username
      user.email = body.email
      user.password = body.password

      user.save(function(err){
        if(err){
          return next(err)
        }else{
          req.session.user = user
          res.redirect('/users/' + user._id)
        }
      })
    }
  })
}

exports.delete = function(req, res, next){
  req.session.destroy()
  res.redirect('/users/login')
}

exports.login = function (req, res, next) {
  user = new User({
    email: '',
    password: ''
  })
  res.render('users/login', {
    user: user
  })
}

exports.auth = function  (req, res, next) {
  var body = req.body

  User.findOne({ email: body.email }, function(err, user){
    if(err){
      return next(err)
    }else{
      if(!user || user.password != body.password){
        user = new User({
          email: body.email,
          password: body.password
        })
        res.render('users/login', {
          user: user,
          msg: '用户名或密码不正确'
        })
      }else{
        res.redirect('/users/' + user._id )
      }
    }
  })
}

