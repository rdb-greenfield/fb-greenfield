let db = require("../index.js");
let mysql = require("mysql");
let bcrypt = require("bcrypt-nodejs");

let insertNewUser = function(fn, ln, e, pw, callback) {
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(pw, salt);
  let query = `INSERT INTO users (firstName, lastName, pw, email) VALUES ('${fn}', '${ln}', '${hash}', '${e}');`;
  db.query(query, function(err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

let verifyUser = function(pw, hash, callback) {
  let found = false;
  if (bcrypt.compareSync(pw, hash)) {
    found = true;
    callback(found);
  } else {
    callback(found);
  }
};

let findUser = function(e, callback) {
  let query = `SELECT * FROM users WHERE email='${e}';`;
  db.query(query, function(err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

let getAllUsers = function(callback) {
  let query = `SELECT * FROM users;`;
  db.query(query, function(err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.insertNewUser = insertNewUser;
module.exports.verifyUser = verifyUser;
module.exports.findUser = findUser;
module.exports.getAllUsers = getAllUsers;
