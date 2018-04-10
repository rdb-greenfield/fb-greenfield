var express = require('express');
var bodyParser = require('body-parser');
var partials = require('express-partials');
var _ = require('underscore');
var db = require('../database-mysql');
var bcrypt = require('bcrypt-nodejs');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(partials());

// Parse JSON (uniform resource locators)
app.use(bodyParser.json());
// Parse forms (signup/login)
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());


// app.get('/items', function (req, res) {
//   items.selectAll(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

app.listen(3050, function() {
  console.log('listening on port 3050!');
});

