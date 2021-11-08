const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.render("home.ejs");
});

var port = process.env.PORT||3000;
app.listen(port, function () {
  console.log("Server Started!!");
});
