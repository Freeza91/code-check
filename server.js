// require
var path = require('path');
var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var store = require('connect-mongo')(session);
var methodOverride = require('method-override')

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(methodOverride('_method'))

// app.set('trust proxy', 1); // trust first proxy
app.use(session({
  secret: 'can not store',
  resave: false,
  saveUninitialized: true,
  store: new store({ url: 'mongodb://localhost/code-check' })
}));

app.use(express.static(path.join(__dirname, 'public')));
// app.use(favicon(__dirname + '/public/images/favicon.ico'));

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "text/html");
  return next();
});

var routes = require('./config/routes');
routes(app);

var fs = require('fs');
var accessLog = fs.createWriteStream('access.log', {flags: 'a'});
var errorLog = fs.createWriteStream('error.log', {flags: 'a'});

app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
