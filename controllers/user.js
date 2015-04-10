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

  req.session.user = user
  // res.redirect('activites')
  redirect('user/' + user._id)
}

exports.show = function(req, res, next){
  var params = req.params
  User.findOne({ '_id' : params.id}, function(err, user){
    if(err){
      return next(err)
    }else{
      if(user){
        res.render('users/show', {
          user: user
        })
      }else{
        res.send("can't found user in my database")
      }
    }
  })
}

exports.edit = function  (req, res, next) {
  user = req.session.user
  if(user){
    res.render('users/edit', {
      user: user
    })
  }else{
    res.send("you haven't logined yet!")
  }
}

exports.update = function(req, res, next){
  var user = req.session.user
  User.findOne({'_id': user._id}, function(err, user){
    if(user){
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
    }else{
      res.send('can not find this user')
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

  User.findOne({ email: body.email}, function(err, user){
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
        req.session.user = user
        res.redirect('/users/' + user._id )
      }
    }
  })
}

