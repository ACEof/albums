var express = require('express');

var app = express();

var port = 3000;

app.use(express.static('public'));

app.get('/', function (req, res) {});

app.listen(process.env.PORT || port, function () {
  console.log('Server working');
});

