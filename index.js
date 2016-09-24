var express = require("express");
var app = express();
var http = require("http");
app.use(express.static(__dirname));
http.createServer(app).listen(8080,function(){
  console.log("server is now listening on port 8080");
})
