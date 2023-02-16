var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var timestampRouter = require('./timestamp')
var headerParserRouter = require('./headerparser')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/timestamp/', timestampRouter);
app.use('/', headerParserRouter);

module.exports = app;
