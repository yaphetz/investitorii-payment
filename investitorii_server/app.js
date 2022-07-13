var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser');

var paylike = require('./routes/paylike');

var app = express();

//cors
app.use(cors())

//body parser
app.use(bodyParser.json())

//endpoints
app.use('/paylike', paylike);

app.listen(3000, function () {
  console.log("Express server listening on port 3000");
  });


module.exports = app;
