const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const winston = require('winston');
const passport = require('passport');
const cors = require('cors')

const indexRouter = require('../routes/index');
const newsRouter = require('../routes/news');
const authRouter = require('../routes/auth');
const authFacebookRouter = require('../routes/authFacebook');

function addMiddlewares(app) {
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(passport.initialize());
  var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
  }
  
  app.use(cors(corsOptions));

  app.all('*', function(req, res, next) {
    winston.log('info', `Date: ${(new Date).toLocaleString()} Url: ${req.url}`);
    next();
  });

  app.use('/v3/auth/facebook', authFacebookRouter);
  app.use('/v3/register', authRouter);
  app.use('/v3/news', newsRouter);
  app.use('/v3', indexRouter);

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    next(createError(404));
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
}

module.exports = addMiddlewares;