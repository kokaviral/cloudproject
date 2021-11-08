const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.render("home.ejs");
});

var port = 3000 || process.env.PORT;
app.listen(port, function () {
  console.log("Server Started!!");
});
