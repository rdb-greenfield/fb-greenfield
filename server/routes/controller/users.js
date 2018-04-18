let express = require("express");
let router = express.Router();
let pass = require("../../passport.js");

let _ = require("underscore");
let db = require("../../../database-mysql");
let bodyParser = require("body-parser");
let Users = require("../../../database-mysql/models/users.js");
let Posts = require("../../../database-mysql/models/posts.js");

router.get("/getall", function(req, res) {
  Users.getAllUsers(function(err, results) {
    if (results) {
      res.send(results);
    }
  });
});

router.post("/update", function(req, res) {
  console.log("got to server", req.body);
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

router.post("/wallpost", function(req, res) {
  Posts.insertNewPost(
    req.body.author,
    req.body.owner,
    1,
    "post",
    req.body.body,
    req.body.img,
    req.body.video,
    0,
    function(err, results) {
      if (err) {
        console.log("Error Posting: ", err);
      } else {
        res.send(true);
      }
    }
  );
});

router.get("/:id/friends", function(req, res) {
  Users.getFriends(req.params.id, function(err, hasFriends) {
    let friends = [];
    if (hasFriends) {
      hasFriends.forEach(function(user, index) {
        Users.getUserData(user.user1_id, function(err, results) {
          if (results) {
            friends.push(results[0]);
            if (index === hasFriends.length - 1) {
              res.send(friends);
            }
          }
        });
      });
    }
  });
});

router.get("/search/:user", function(req, res) {
  Users.searchUsers(req.params.user, function(err, data) {
    if (data) {
      res.send(data);
    }
  });
});

router.post("/addfriend", function(req, res) {
  Users.addFriend(req.body.currentUser, req.body.otherUser, function(
    err,
    data
  ) {
    if (data) {
      res.send(data);
    }
    if (err) {
      console.log("Add Friend Error: ", err);
    }
  });
});

router.post("/removefriend", function(req, res) {
  Users.removeFriend(req.body.currentUser, req.body.otherUser, function(
    err,
    data
  ) {
    if (data) {
      res.send(data);
    }
    if (err) {
      console.log("Remove Friend Error: ", err);
    }
  });
});

module.exports = router;
