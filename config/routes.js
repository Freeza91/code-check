var db = require('./schema')
var schema = db.Schema
var mongodb = db.mongodb

var user = require('../controllers/user')
var activity = require('../controllers/activity')
var code = require('../controllers/code')

module.exports = function(app){

  // resorces users
  app.get('/users/sign_up', user.sign_up)                 //注册页面
  app.post('/users', user.create)                         //创建用户
  app.get('/users/login', user.login)                     //登陆页面
  app.post('/users/auth', user.auth)                      //验证
  app.delete('/users/logout/:id', user.delete)            //用户登出
  app.get('/users/:id', user.show)                        //用户信息展示页面
  app.get('/users/:id/edit', user.edit)                   //用户信息更新页面
  app.put('/users/:id/update', user.update)               //用户信息更新页面

  // resoures activites
  app.get('/activities', activity.index)                  //列出全部活动
  app.get('/activities/new', activity.new)                //创建活动页面
  app.post('/activities/create', activity.create)          //创建活动
  app.get('/activities/:id', activity.show)               //展示活动信息
  app.delete('/activities/:id', activity.delete)          //删除活动

  // resoures codes
  app.get('/activities/:id/codes/new', code.create)       //创建活动下得code
  app.get('/activities/:id/codes/active', code.active)    //激活code
}
