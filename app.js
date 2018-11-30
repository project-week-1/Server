var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const translateRouter = require('./routes/translate')
var textspeechRouter = require('./routes/textspeech.js');
require('dotenv').config()
var newsRouter = require('./routes/news');

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/translate', translateRouter)
app.use('/speech', textspeechRouter);
app.use('/news', newsRouter)

module.exports = app;
