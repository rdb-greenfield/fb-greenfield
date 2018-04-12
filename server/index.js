let express = require("express");
let bodyParser = require("body-parser");
let partials = require("express-partials");
let _ = require("underscore");
let base = require("./routes/index");
let auth = require("./routes/models/authentication");
<<<<<<< HEAD
let users = require("./routes/models/users");

=======
let passport = require("passport");
>>>>>>> edits to auth
require("./passport");

let app = express();

app.use(express.static(__dirname + "/../react-client/dist"));
app.use(partials());

// Parse JSON (uniform resource locators)
app.use(bodyParser.json());
// Parse forms (signup/login)
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", passport.authenticate("jwt", { session: false }), base);
app.use("/auth", auth);
app.use("/users", users);

app.listen(3050, function() {
  console.log("listening on port 3050!");
});
