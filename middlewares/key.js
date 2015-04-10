var uuid = require('node-uuid')

exports.genApiKey = function(){
  return uuid.v1()
}

exports.genCode = function(){
  return uuid.v4()
}