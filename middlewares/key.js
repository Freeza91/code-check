var uuid = require('node-uuid')

exports.genApiKey = function(){
  return uuid.v1()
}