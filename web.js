
var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');

app.get('/', function(request, response) {
  var message = fs.readFileSync('index.html','utf8');
  response.send(message);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
