let _ = require("underscore");
let db = require("../database-mysql");
let Users = require("../database-mysql/models/users.js");
let LocalStrategy = require("passport-local").Strategy;
let passport = require("passport");
let jwt = require("jsonwebtoken");
let passportJWT = require("passport-jwt");
let configs = require("./../configs/config");
let JwtStrategy = passportJWT.Strategy;

passport.use(
  "local-login",
  new LocalStrategy(
    {
      usernameField: "login_email",
      passwordField: "login_password",
      passReqToCallback: true
    },
    function(req, email, password, callback) {
      Users.findUser(email, function(err, data) {
        if (err) {
          callback(err);
        }
        // if user doesn't exist, send notification
        if (!data.length) {
          callback(null, false, "User not found.");
        } else {
          // compare user password to hashed password
          Users.verifyUser(password, data[0].pw, function(result) {
            // if result = true -> log the user in
            if (result) {
              callback(null, data, "Login successful.");
            } else {
              callback(null, false, "Incorrect password.");
            }
          });
        }
      });
    }
  )
);

let authenticate = (req, res, next) => {
  if (req.url === "/login" || req.url === "/signup") {
    next();
  } else {
    jwt.verify(req.headers.cookie, configs.HASHKEY, function(err, token) {
      if (err) {
        // should send an error response here and reload login page - TO DO
        res.redirect("/login");
        console.log(err);
      } else {
        // token verified
        next();
      }
    });
  }
};

module.exports.authenticate = authenticate;
