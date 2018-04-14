let express = require("express");
let router = express.Router();

let _ = require("underscore");
let db = require("../../../database-mysql");
let bodyParser = require("body-parser");
let Users = require("../../../database-mysql/models/users.js");

router.get("/:id", function(req, res, next) {
  console.log("this is the new id reqest", req.params.id);
});

module.exports = router;
