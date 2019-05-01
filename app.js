var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var beats = require('./routes/api/beats');
var app = express();

var browserify = require('browserify'),
    stringify = require('stringify');

var bundle = browserify()
    .transform(stringify, {
      appliesTo: { includeExtensions: ['.hjs', '.html', '.whatever'] }
    })
    .add('my_app_main.js');

app.use(bundle);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/beats', beats);
app.use(function(err, req, res, next) {
    console.log(err);
    
    if (req.app.get('env') !== 'development') {
    delete err.stack;
    }
    
    res.status(err.statusCode || 500).json(err);
    });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var auth = require('./routes/auth');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/mern-secure', { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));
  app.use('/api/auth', auth);

  module.exports = app;