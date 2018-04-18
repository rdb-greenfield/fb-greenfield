let express = require("express");
let routes = express.Router();
let auth = require("./controller/auth");
let users = require("./controller/users");
let authenticate = require("../passport.js").authenticate;
let profile = require("./controller/profile.js");

routes
  .use("/auth", auth)
  //.use(authenticate)
  .use("/users", users)
  .use("/profile", profile);

module.exports = routes;
