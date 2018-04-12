let express = require("express");
let router = express.Router();

let _ = require("underscore");
let db = require("../../../database-mysql");
let bodyParser = require("body-parser");
let Users = require("../../../database-mysql/models/users.js");

router.get("/getAll", function(req, res) {
  Users.getAllUsers(function(err, data) {
    if (err) {
      console.log("Error Fetching Users: ", err);
    } else if (!data) {
      console.log("There are no users");
    } else {
      res.send(data);
    }
  });
});

module.exports = router;
