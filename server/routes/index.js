let express = require("express");
let routes = express.Router();

routes.get("/test", function(req, res) {
  res.redirect("test.html");
});

module.exports = routes;
