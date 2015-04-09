var db = require('./schema');
var schema = db.Schema;
var mongodb = db.mongodb;

var user = require('../controllers/user');
var activity = require('../controllers/activity');
var code = require('../controllers/code');

module.exports = function(app){

  // resorces users
  app.get('/users/sign_up', user.sign_up)     //注册页面
  app.post('/users', user.create);            //创建用户
  app.get('/users/login', user.login)         //登陆页面
  app.post('/users/auth', user.auth)         //验证
  app.delete('/users/logout/:id', user.delete)   //用户登出
  app.get('/users/:id', user.show);           //用户信息展示页面
  app.get('/users/:id/edit', user.edit)       //用户信息更新页面
  app.put('/users/:id/update', user.update)       //用户信息更新页面


  // resoures activites
  app.get('/activities', activity.index);
  app.get('/activities/new', activity.new);
  app.post('/activites/create', activity.create);
  app.get('/activities/:id', activity.show);


  // resoures codes
  app.get('/codes', code.index);
  app.post('/codes', code.create);
}
