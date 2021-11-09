const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.render("home.ejs");
});

app.get("/newcamp", function (req, res) {
  res.render("newcamp.ejs");
});

app.get("/login", function (req, res) {
  res.render("login.ejs");
});

app.get("/register", function (req, res) {
  res.render("register.ejs");
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server Started!!");
});
