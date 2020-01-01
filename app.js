var express = require("express");

var app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/game", function(req, res) {
  res.render("colorGame");
});

app.listen(process.env.PORT || 3000, process.env.IP, function() {
  console.log("Server has started");
});
