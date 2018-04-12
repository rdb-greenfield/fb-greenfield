let _ = require("underscore");
let db = require("../database-mysql");
let Users = require("../database-mysql/models/users.js");
let LocalStrategy = require("passport-local").Strategy;
let passport = require("passport");
let jwt = require("jsonwebtoken");
let passportJWT = require("passport-jwt");
let JwtStrategy = passportJWT.Strategy;
let ExtractJwt = passportJWT.ExtractJwt;

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
  // grab the token from header and verify w/ secret key
  jwt.verify(req.headers.token, "g6787cQi$q51", function(err, token) {
    if (err) {
      // should send an error response here and reload login page - TO DO
      console.log(err);
    } else {
      console.log("token verified");
      next();
    }
  });
};

module.exports.authenticate = authenticate;
