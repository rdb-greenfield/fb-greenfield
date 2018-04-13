let express = require("express");
let bodyParser = require("body-parser");
let partials = require("express-partials");
let _ = require("underscore");
let base = require("./routes/index");
let auth = require("./routes/models/authentication");
let users = require("./routes/models/users");
let posts = require("../database-mysql/models/posts");

let passport = require("passport");
require("./passport");

let app = express();

app.use(passport.initialize());

app.use(express.static(__dirname + "/../react-client/dist"));
app.use(partials());

posts.selectWallPosts(1, function(err, results) {
  results = JSON.parse(JSON.stringify(results));
  //console.log(results);
  _.each(results, function(post) {
    console.log(post);
    post["comments"] = [];
    posts.selectComments(post.id, function(err, results) {
      console.log(results);
      results = JSON.parse(JSON.stringify(results));
      post["comments"].push(results);
      _.each(results, function(comment) {
        comment["subComments"] = [];
        posts.selectSubComments(comment.id, function(err, results) {
          results = JSON.parse(JSON.stringify(results));
          comment["subComments"].push(results);
          // post is now and object with a comments array, each comment has an array of sub-comments
          console.log(post.comments);
        });
      });
    });
  });
});

// test function for inserting posts
// SET FOREIGN_KEY_CHECKS=0; to add first post, then set to 1
// posts.insertNewPost(
//   2,
//   1,
//   17,
//   "post",
//   "this is a post by mark on tylers wall",
//   null,
//   null,
//   0,
//   function(err, results) {
//     console.log("error?", err);
//     console.log(results);
//   }
// );

// Parse JSON (uniform resource locators)
app.use(bodyParser.json());
// Parse forms (signup/login)
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", base);
app.use("/auth", auth);
app.use("/users", users);

app.listen(3050, function() {
  console.log("listening on port 3050!");
});
