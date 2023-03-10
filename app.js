var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var timestampRouter = require('./timestamp');
var headerParserRouter = require('./headerparser');
var urlShortenerRouter = require('./urlshortener');

var app = express();

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/timestamp', timestampRouter);
app.use('/headerparser', headerParserRouter);
app.use('/', urlShortenerRouter);

module.exports = app;
