const express = require("express");
const port = 8080;
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(port);
