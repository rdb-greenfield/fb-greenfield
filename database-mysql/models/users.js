const db = require("../index.js");
const mysql = require("mysql");
const bcrypt = require("bcrypt-nodejs");

const insertNewUser = (fn, ln, e, pw, callback) => {
  const salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(pw, salt);
  const query = `INSERT INTO users (firstName, lastName, pw, email) VALUES ('${fn}', '${ln}', '${hash}', '${e}');`;
  db.query(query, function(err, results, fields) {
    err ? callback(err, null) : callback(null, results);
  });
};

const verifyUser = (pw, hash, callback) => {
  let found = false;
  if (bcrypt.compareSync(pw, hash)) {
    found = true;
    callback(found);
  } else {
    callback(found);
  }
};

const findUser = (e, callback) => {
  const query = `SELECT * FROM users WHERE email='${e}';`;
  db.query(query, function(err, results, fields) {
    err ? callback(err, null) : callback(null, results);
  });
};

const getAllUsers = callback => {
  const query = `SELECT * FROM users;`;
  db.query(query, function(err, results, fields) {
    err ? callback(err, null) : callback(null, results);
  });
};

const addFriend = (id1, id2, callback) => {
  // query to check for existing friendship
  const query1 = `SELECT * FROM friends WHERE (user1_id='${id1}' AND user2_id='${id2}') OR (user1_id='${id2}' AND user2_id='${id1}');`;
  const query2 = `INSERT INTO friends (user1_id, user2_id, active) VALUES ('${id1}', '${id2}', true);`;

  db.query(query1, function(err, results, fields) {
    // check if the friendship already exists
    if (!results.length) {
      db.query(query2, function(err, results, fields) {
        err ? callback(err, null) : callback(null, results);
      });
    } else {
      callback("null", "Friendship already exists");
    }
  });
};

const getFriends = (id, callback) => {
  // union select statement to check for all friend combinations
  const query = `(select user1_id from friends where user2_id='${id}') UNION (select user2_id from friends where user1_id='${id}');`;
  db.query(query, function(err, results, fields) {
    err ? callback(err, null) : callback(null, results);
  });
};

module.exports.addFriend = addFriend;
module.exports.getFriends = getFriends;
module.exports.insertNewUser = insertNewUser;
module.exports.verifyUser = verifyUser;
module.exports.findUser = findUser;
module.exports.getAllUsers = getAllUsers;
