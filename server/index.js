let express = require("express");
let bodyParser = require("body-parser");
let partials = require("express-partials");
let _ = require("underscore");
let base = require("./routes/index");
let auth = require("./routes/models/authentication");
require("./passport");

let app = express();

app.use(express.static(__dirname + "/../react-client/dist"));
app.use(partials());

// Parse JSON (uniform resource locators)
app.use(bodyParser.json());
// Parse forms (signup/login)
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", base);
app.use("/auth", auth);

app.get("/allUsers", function(req, res) {
  Users.getAllUsers(function(err, data) {
    if (err) {
      console.log("Error Fetching Users: ", err);
    } else if (!data) {
      console.log("There are no users");
    } else {
      res.send(data);
    }
  });
});

app.listen(3050, function() {
  console.log("listening on port 3050!");
});
