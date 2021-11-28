var express = require("express");
var path = require("path");
var cors = require("cors");
var serveStatic = require("serve-static");

let config = {
  origin: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  allowedHeaders: "Content-Type,Authorization,x-user",
  exposedHeaders: "Content-Range,X-Content-Range,x-user",
  preflightContinue: true,
  optionsSuccessStatus: 204,
  credentials: true,
};

var app = express();
app.options("*", cors()); // include before other routes
app.use(cors(config));

app.use(serveStatic(path.join(__dirname, "./dist")));
app.listen(3000);
