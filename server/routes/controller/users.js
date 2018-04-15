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

module.exports = router;
