let express = require("express");
let router = express.Router();

let _ = require("underscore");
let db = require("../../../database-mysql");
let bodyParser = require("body-parser");
let Users = require("../../../database-mysql/models/users.js");
let jwt = require("jsonwebtoken");
let passport = require("passport");

// handle user login route
router.post("/login", function(req, res, next) {
  passport.authenticate("local-login", { session: false }, function(
    err,
    user,
    info
  ) {
    if (err || !user) {
      return res.status(400).json({
        message: "something not working",
        user: user
      });
    }

    req.login(user, { session: false }, function(err) {
      if (err) {
        res.send(err);
      }
      let token = jwt.sign(user, "g6787cQi$q51");
      return res.json({ user, token });
    });
  })(req, res, next);
});

// handle user signup route
router.post("/signup", function(req, res) {
  // run user insert function with input values
  Users.findUser(req.body.signup_email, function(err, data) {
    // check if user already exists
    console.log();
    if (data.length) {
      alert("User already exists, please login.");
      res.redirect("/");
    } else {
      // user does not exist, create and login
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
      res.redirect("/test");
    }
  });
});

router.post("/logout", function(req, res) {
  res.redirect("/");
});

module.exports = router;
