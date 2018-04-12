let express = require("express");
let routes = express.Router();
let pass = require("../passport.js");

routes.get("/test", function(req, res) {
  res.redirect("/test");
});

routes.get("/secret", pass.authenticate, function(req, res) {
  // pass the file name to be rendered to the client
  res.send("test.html");
});

module.exports = routes;
