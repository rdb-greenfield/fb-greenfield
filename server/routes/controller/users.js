let express = require("express");
let router = express.Router();
let pass = require("../../passport.js");

let _ = require("underscore");
let db = require("../../../database-mysql");
let bodyParser = require("body-parser");
let Users = require("../../../database-mysql/models/users.js");

router.get("/getall", function(req, res) {
  Users.getAllUsers(function(err, results) {
    if (results) {
      res.send(results);
    }
  });
});

router.post("/update", function(req, res) {
  Users.updateUserData(
    req.body.userID,
    req.body.column,
    req.body.data,
    function(err, results) {
      if (err) {
        console.log(err);
        res.status(500).send();
      } else {
        console.log(results);
        res.status(200).send();
      }
    }
  );
});

module.exports = router;
