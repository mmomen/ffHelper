var Express = require("express");
var app = Express();

app.use(Express.static(__dirname+"/public"));

app.get('/', function(req, res, next) {
  res.send("<h1>FFHelper</h1>");
});

var port = "8090";
var server = app.listen(port);
console.log('Example app listening at http://127.0.0.1:%s', port);