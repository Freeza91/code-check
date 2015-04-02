// wordspace: https://ide.c9.io/rudyboy/code-check
// reference: https://docs.c9.io/v1.0/docs/setting-up-mongodb
// start mongo by using shell
// mongod --dbpath=data --port 28017

var settings = require('./settings');
var mongoose = require('mongoose');
mongoose.connect('mongodb://' + settings.host + ':' + settings.port + '/' + settings.db);
var Schema = mongoose.Schema;

module.exports = {
  'Schema' : Schema,
  'mongoose': mongoose
}
