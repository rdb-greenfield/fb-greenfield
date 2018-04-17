let express = require("express");
let bodyParser = require("body-parser");
let _ = require("underscore");
let router = require("./routes/index");
let path = require("path");
let passport = require("passport");
let { authenticate } = require("./passport.js");
let AWS = require("aws-sdk");
let configs = require("./../configs/config");

let app = express();

app.use(passport.initialize());
app.use(express.static(__dirname + "/../react-client/dist"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// AWS S3 bucket configs
AWS.config.update({
  accessKeyId: configs.ACCESSKEY,
  secretAccessKey: configs.SECRETKEY
});

// use the s3/dropzone component to upload photos to s3 bucket
app.use(
  "/s3",
  require("react-dropzone-s3-uploader/s3router")({
    bucket: "greenfield-images",
    headers: { "Access-Control-Allow-Origin": "*" },
    ACL: "public-read"
  })
);

app.use("/", router);

app.get("/*", function(req, res) {
  res.sendFile(path.resolve(__dirname, "../react-client/dist/index.html"));
});

app.listen(3050, function() {
  console.log("listening on port 3050!");
});
