let mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "admin123",
  database: "greenfield"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Mysql Connected!");
});

module.exports = connection;
