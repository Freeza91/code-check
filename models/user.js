// require  something
// refer https://cnodejs.org/topic/504b4924e2b84515770103dd
// refer http://mongoosejs.com/docs/index.html
var db = require('../config/schema');
var Schema = db.Schema;
var mongoose = db.mongoose;

var UserSchema = new Schema({
  username: String,
});
var UserModel = mongoose.model("User", UserSchema);

module.exports = {
  'model' : UserModel
}
