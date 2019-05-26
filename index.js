const express = require("express");
const app = express();

var port = process.env.PORT || 8080;

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

app.listen(port, function () {
    console.log('Our app is running on http://localhost:' + port);
});


