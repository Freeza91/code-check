var db = require('../config/schema')
var Schema = db.Schema
var mongoose = db.mongoose

var ActivitySchema = new Schema({
  name: String,
  desc: String,
  userId: Schema.Types.ObjectId,
  created_at: Date,
  end_at: Date
})

var ActivityModel = mongoose.model("Activity", ActivitySchema)

// 静态方法
ActivitySchema.statics.findSomething = function(cb){

}

// 实例方法
ActivitySchema.methods.findOtherSomething = function(cb){

}


module.exports = {
  'model' : ActivityModel
}
