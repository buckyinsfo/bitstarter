/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express = require("express");
var app = express();
app.use(express.logger());

var fs = require("fs");
var infile = "index.html";
var encoding = "utf8";
var content = fs.readFileSync( infile, encoding );

app.get('/', function(request, response) {
  response.send( content.toString() + '\n');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

