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
  const query = `SELECT * FROM posts WHERE owner_id='${o_id}' AND parent_id=17;`;
  db.query(query, function(err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const selectComments = (p_id, callback) => {
  const query = `SELECT * FROM posts WHERE parent_id='${p_id}' AND post_type='comment';`;
  db.query(query, function(err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const selectSubComments = (p_id, callback) => {
  const query = `SELECT * FROM posts WHERE parent_id='${p_id}' AND post_type='sub-comment';`;
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
module.exports.selectComments = selectComments;
module.exports.selectSubComments = selectSubComments;
