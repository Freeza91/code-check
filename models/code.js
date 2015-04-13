var db = require('../config/schema')
var Schema = db.Schema
var mongoose = db.mongoose

var CodeSchema = new Schema({
  created_at: Date,
  actived_at: Date,
  codeValue: String,
  is_actived: Boolean,
  activityId: Schema.Types.ObjectId
})

CodeSchema.plugin(require('mongoose-paginate'))

var CodeModel = mongoose.model("Code", CodeSchema)

// 静态方法
CodeSchema.statics.findSomething = function(cb){

}

// 实例方法
CodeSchema.methods.findOtherSomething = function(cb){

}


module.exports = {
  'model' : CodeModel
}
