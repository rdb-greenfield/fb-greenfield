let db = require("../index.js");
let _ = require("underscore");
let mysql = require("mysql");

const insertNewPost = (a_id, o_id, p_id, pt, b, i, v, l, callback) => {
  const query = `INSERT INTO posts (author_id, owner_id, parent_id, post_type, body, img, video, likes) VALUES ('${a_id}', '${o_id}', '${p_id}', '${pt}', '${b}', '${i}', '${v}', '${l}');`;
  db.query(query, function(err, results, fields) {
    err ? callback(err, null) : callback(null, results);
  });
};

// query for all posts owned by the user (posts, comments, sub-comments)
const selectWallPosts = (o_id, callback) => {
  const query = `SELECT posts.id, posts.author_id, posts.owner_id, posts.parent_id, posts.post_type, posts.createdat, posts.body, posts.img, posts.video, posts.likes, users.firstname, users.lastname, users.profilepicture FROM posts LEFT JOIN users ON posts.author_id=users.id WHERE posts.owner_id='${o_id}'`;
  db.query(query, function(err, results, fields) {
    err ? callback(err, null) : callback(null, results);
  });
};

// these are the posts that belong to the user or user's friends
const selectFeedPosts = (o_id, callback) => {
  // first query for all of the users friends
  const query1 = `(SELECT user1_id FROM friends WHERE user2_id='${o_id}' AND active=true) UNION (select user2_id from friends where user1_id='${o_id}' AND active=true);`;
  db.query(query1, function(err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      // create an array of friends with user ID in array by default
      let friends = [o_id];
      _.each(results, function(friend) {
        friend.user1_id
          ? friends.push(friend.user1_id)
          : friends.push(friend.user2_id);
      });
      // query for user + friends owned posts
      const query2 = `SELECT posts.id, posts.author_id, posts.owner_id, posts.parent_id, posts.post_type, posts.createdat, posts.body, posts.img, posts.video, posts.likes, users.firstname, users.lastname, users.profilepicture FROM posts LEFT JOIN users ON posts.author_id=users.id WHERE posts.owner_id IN (${[
        ...friends
      ]})`;
      db.query(query2, function(err, results, fields) {
        err ? callback(err, null) : callback(null, results);
      });
    }
  });
};

const likePost = (u_id, p_id, callback) => {
  const query1 = `SELECT * FROM likes WHERE liker_id='${u_id}' AND post_id='${p_id}'`;
  const query2 = `UPDATE posts SET likes=likes+1 WHERE id='${p_id}'`;
  const query3 = `INSERT INTO likes (liker_id, post_id) VALUES ('${u_id}', '${p_id}')`;
  const query4 = `UPDATE posts SET likes=likes-1 WHERE id='${p_id}'`;
  const query5 = `DELETE FROM likes WHERE liker_id='${u_id}' AND post_id='${p_id}'`;
  db.query(query1, function(err, results, fields) {
    if (err) {
      callback(err);
    } else if (results.length) {
      // like already exists by this user on this post!
      // decrement the like count in posts table
      db.query(query4, function(err, results, fields) {
        err ? console.log(err) : console.log(results);
      });
      // remove a like record to the likes join table
      db.query(query5, function(err, results, fields) {
        err ? console.log(err) : console.log(results);
      });
    } else {
      // no like exists, let's add one
      // increment the like count in posts table
      db.query(query2, function(err, results, fields) {
        err ? console.log(err) : console.log(results);
      });
      // add a like record to the likes join table
      db.query(query3, function(err, results, fields) {
        err ? console.log(err) : console.log(results);
      });
    }
  });
};

module.exports.insertNewPost = insertNewPost;
module.exports.selectWallPosts = selectWallPosts;
module.exports.selectFeedPosts = selectFeedPosts;
module.exports.likePost = likePost;
