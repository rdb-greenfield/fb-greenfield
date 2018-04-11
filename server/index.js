var express = require("express");
var bodyParser = require("body-parser");
var partials = require("express-partials");
var _ = require("underscore");
var db = require("../database-mysql");
var Users = require("../database-mysql/models/users.js");
var bcrypt = require("bcrypt-nodejs");
var cookieParser = require("cookie-parser");
let alert = require("alert-node");

var app = express();

app.use(express.static(__dirname + "/../react-client/dist"));
app.use(partials());

// Parse JSON (uniform resource locators)
app.use(bodyParser.json());
// Parse forms (signup/login)
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.redirect("index.html");
});

// handle user signup route
app.post("/signup", function(req, res) {
  // run user insert function with input values
  Users.insertNewUser(
    req.body.signup_firstname,
    req.body.signup_lastname,
    req.body.signup_email,
    req.body.signup_password,
    function(err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log("New user created.");
      }
    }
  );
  res.redirect("/");
});

// handle user login route
app.post("/login", function(req, res) {
  // query db to find user with email input
  Users.findUser(req.body.login_email, function(err, data) {
    // if user doesn't exist, send notification
    if (!data.length) {
      alert("Username not found");
      res.end("No User");
    } else {
      // compare user password to hashed password
      Users.verifyUser(req.body.login_password, data[0].pw, function(result) {
        // if result = true -> log the user in
        if (result) {
          // REDIRECT USER TO HOME PAGE HERE
          res.end();
        } else {
          alert("Incorrect password, try again.");
          res.end("Incorrect Password");
        }
      });
    }
  });
  res.redirect("/");
});

app.listen(3050, function() {
  console.log("listening on port 3050!");
});
