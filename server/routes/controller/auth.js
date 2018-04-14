let express = require("express");
let router = express.Router();
let pass = require("../../passport.js");

let _ = require("underscore");
let db = require("../../../database-mysql");
let bodyParser = require("body-parser");
let Users = require("../../../database-mysql/models/users.js");
let jwt = require("jsonwebtoken");
let passport = require("passport");

// handle user login route
router.post("/login", function(req, res, next) {
  passport.authenticate(
    "local-login",
    { session: false, failureRedirect: "/auth/login" },
    function(err, user, info) {
      if (err || !user) {
        console.log(info);
        return res.status(401).send(JSON.stringify(info));
      }

      req.login(user, { session: false }, function(err) {
        if (err) {
          res.send(err);
        }
        let token = jwt.sign({ data: JSON.parse(user[0].id) }, "g6787cQi$q51", {
          expiresIn: "1hr"
        });
        res.set(
          "auth",
          JSON.stringify({ auth: true, token: token, id: user[0].id })
        );
        res.set("Access-Control-Expose-Headers", "auth");
        res.send();
      });
    }
  )(req, res, next);
});

// handle user signup route
router.post("/signup", function(req, res) {
  // run user insert function with input values
  Users.findUser(req.body.signup_email, function(err, data) {
    // check if user already exists
    if (data.length) {
      res.status(401).send("User already exists. Please login.");
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
      let token = jwt.sign({ data: req.body.signup_email }, "g6787cQi$q51", {
        expiresIn: "1hr"
      });
      res.set("auth", JSON.stringify({ auth: true, token: token }));
      res.set("Access-Control-Expose-Headers", "auth");
      res.send();
    }
  });
});

router.post("/logout", function(req, res) {
  res.redirect("/");
});

// router.get("/login", function(req, res) {
//   console.log("get to the get");
// });

module.exports = router;
