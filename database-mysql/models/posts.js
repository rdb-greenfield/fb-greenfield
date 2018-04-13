let db = require("../index.js");
let mysql = require("mysql");

const insertNewPost = (a_id, o_id, p_id, pt, b, i, v, l, callback) => {
  const query = `INSERT INTO posts (author_id, owner_id, parent_id, post_type, body, img, video, likes) VALUES ('${a_id}', '${o_id}', '${p_id}', '${pt}', '${b}', '${i}', '${v}', '${l}');`;
  db.query(query, function(err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const selectWallPosts = (o_id, callback) => {
  const query = `SELECT * FROM posts WHERE owner_id='${o_id}';`;
  db.query(query, function(err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const selectFeedPosts = (o_id, callback) => {
  const query = `SELECT * FROM posts WHERE owner_id='${o_id}';`;
  db.query(query, function(err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.insertNewPost = insertNewPost;
module.exports.selectWallPosts = selectWallPosts;
module.exports.selectFeedPosts = selectFeedPosts;
