var express = require("express");
var path = require("path");
// var cors = require("cors");
var serveStatic = require("serve-static");

var corsOptions = {
  origin: ["https://rwx.auth0.com", "http://system1.app.rwx.systems"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  allowedHeaders: "Content-Type,Authorization,x-user-id",
  exposedHeaders: "Content-Range,X-Content-Range,x-user-id",
  preflightContinue: true,
  optionsSuccessStatus: 204,
  credentials: true,
};

var app = express();
app.options("*", cors()); // include before other routes
app.use(cors(corsOptions));

app.use(serveStatic(path.join(__dirname, "./dist")));
app.listen(3000);
