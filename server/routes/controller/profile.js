let express = require("express");
let router = express.Router();

let _ = require("underscore");
let db = require("../../../database-mysql");
let bodyParser = require("body-parser");
let users = require("../../../database-mysql/models/users.js");
let posts = require("../../../database-mysql/models/posts.js");

// get handler for user profile
router.get("/:id", function(req, res, next) {
  let profile = {};
  users.getUserData(req.params.id, function(err, data) {
    if (err) {
      res.status(500).send("Database error.");
    }
    profile["user"] = data[0];
    posts.selectWallPosts(req.params.id, function(err, data) {
      if (err) {
        res.status(500).send("Database error.");
      }
      profile["wall"] = data;
      users.getAllUserPhotos(req.params.id, function(err, data) {
        if (err) {
          res.status(500).send("Database error.");
        }
        profile["photos"] = data;
        res.json(profile);
      });
    });
  });
});

module.exports = router;
