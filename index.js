const express = require("express");
const app = express();
const http = require('http');
const path = require('path');
const reload = require('reload');

var port = process.env.PORT || 3000;


app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/about_me", function(req, res) {
  res.render("about_me");
});

app.get("/contact", function(req, res) {
  res.render("contact");
});

app.get("/resume", function(req, res) {
  res.render("resume");
});

app.get("/", function(req, res) {
  res.render("index");
});

const server = http.createServer(app);

server.listen(port, function () {
    console.log('Our app is running on http://localhost:' + port);
});

reload(app)