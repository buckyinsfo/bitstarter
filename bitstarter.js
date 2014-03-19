/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express = require("express");
var app = express();
app.use(express.logger());

var fs = require("fs");
var fileName = "index.html";
var encoding = "utf8";

fs.exists(fileName, function(exists) {
    if (exists) {
        fs.stat(fileName, function(error, stats) {
            fs.open(fileName, "r", function(error, fd) {
                var buffer = new Buffer(stats.size);
 
                fs.read(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer) {
                    var data = buffer.toString(encoding, 0, buffer.length);
 
                    console.log(data);
                    fs.close(fd);
                });
            });
        });
    }
});




app.get('/', function(request, response) {
  response.send( content.toString() + '\n');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

