let express = require("express");
let router = express.Router();

let _ = require("underscore");
let db = require("../../../database-mysql");
let bodyParser = require("body-parser");
let Users = require("../../../database-mysql/models/users.js");
let Posts = require("../../../database-mysql/models/posts.js");

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

router.get("/getAllPosts/:id", function(req, res) {
  Posts.selectWallPosts(req.params.id, function(err, posts) {
    if (err) {
      console.log("Error Fetching Posts: ", err);
    } else if (!posts) {
      console.log("There are no posts");
    } else {
      console.log(posts);
      res.json(posts);
    }
  });
});

router.post("/newpost", function(req, res) {});
module.exports = router;
