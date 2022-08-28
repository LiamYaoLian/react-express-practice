const createError = require('http-errors');
const express = require('express');
import {Request, Response, NextFunction, ErrorRequestHandler} from 'express';
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes');
const usersRouter = require('./routes/users');
const contactsRouter = require('./routes/contacts');

const app = express();

//Import the mongoose module
const mongoose = require('mongoose');

//Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/local_library_db';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/contacts', contactsRouter);

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next:NextFunction) => {
  next(createError(404));
});

// error handler
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');

};
app.use(errorHandler);

module.exports = app;
