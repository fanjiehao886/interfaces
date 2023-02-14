var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello Jack Fan!');
});

app.listen(80);