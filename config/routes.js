var db = require('./schema')
var schema = db.Schema
var mongodb = db.mongodb

var user = require('../controllers/user')
var activity = require('../controllers/activity')
var code = require('../controllers/code')
var pages = require('../controllers/pages')

var auth = require('../middlewares/auth')

module.exports = function(app){

  app.get('/', pages.home)

  // resorces users
  app.get('/users/sign_up', user.sign_up)                       //注册页面
  app.post('/users', user.create)                               //创建用户
  app.get('/users/login', user.login)                           //登陆页面
  app.post('/users/auth', user.auth)                            //验证
  app.delete('/users/logout/:id', auth.userRequired, user.delete)   //用户登出
  app.get('/users/:id', auth.userRequired, user.show)               //用户信息展示页面
  app.get('/users/:id/edit', auth.userRequired, user.edit)          //用户信息更新页面
  app.put('/users/:id/update', auth.userRequired, user.update)      //用户信息更新页面

  // resoures activites
  app.get('/activities', auth.userRequired, activity.index)          //列出全部活动
  app.get('/activities/new', auth.userRequired, activity.new)        //创建活动页面
  app.post('/activities/create', auth.userRequired, activity.create) //创建活动
  app.get('/activities/:id', auth.userRequired, activity.show)       //展示活动信息
  app.delete('/activities/:id', auth.userRequired, activity.delete)  //删除活动

  // resoures codes
  app.get('/activities/:id/codes/new', auth.userRequired, code.create)    //创建活动下得code
  app.get('/activities/:id/codes/active', auth.userRequired, code.active) //激活code

}
