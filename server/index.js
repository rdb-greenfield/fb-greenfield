let express = require("express");
let bodyParser = require("body-parser");
// let partials = require("express-partials");
let _ = require("underscore");
let router = require("./routes/index");
let path = require("path");
let passport = require("passport");
let { authenticate } = require("./passport.js");

let app = express();

app.use(passport.initialize());
app.use(express.static(__dirname + "/../react-client/dist"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(partials());

// Parse JSON (uniform resource locators)
// Parse forms (signup/login)

app.use("/", router);

app.get("/*", function(req, res) {
  res.sendFile(path.resolve(__dirname, "../react-client/dist/index.html"));
});

app.listen(3050, function() {
  console.log("listening on port 3050!");
});
