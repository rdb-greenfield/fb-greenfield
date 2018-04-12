let _ = require("underscore");
let db = require("../database-mysql");
let Users = require("../database-mysql/models/users.js");
let alert = require("alert-node");
let LocalStrategy = require("passport-local").Strategy;
let passport = require("passport");
let passportJWT = require("passport-jwt");
let JWTStrategy = passportJWT.Strategy;
let ExtractJWT = passportJWT.ExtractJwt;

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
          alert("Username not found.");
          callback(null, false, { message: "User not found." });
        } else {
          // compare user password to hashed password
          Users.verifyUser(password, data[0].pw, function(result) {
            // if result = true -> log the user in
            if (result) {
              callback(null, data, { message: "Login successful." });
            } else {
              alert("Incorrect password.");
              callback(null, false, { message: "Incorrect password." });
            }
          });
        }
      });
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: "g6787cQi$q51"
    },
    function(jwtPayload, callback) {
      console.log(jwtPayload);
      callback(null, jwtPayload);
    }
  )
);
