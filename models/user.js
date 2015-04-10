// require  something
// refer https://cnodejs.org/topic/504b4924e2b84515770103dd
// refer http://mongoosejs.com/docs/index.html
var db = require('../config/schema')
var Schema = db.Schema
var mongoose = db.mongoose

var UserSchema = new Schema({
  username: String,
  password: String,
  email: String,
  apiKey: String
})

var UserModel = mongoose.model("User", UserSchema)

// 静态方法
UserSchema.statics.findSomething = function(cb){

}

// 实例方法
UserSchema.methods.findOtherSomething = function(cb){

}


module.exports = {
  'model' : UserModel
}
