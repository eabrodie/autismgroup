'use strict';
var fs = require('fs');

var express = require('express');

var app = express();

app.get('/', function (req, res, next) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/logo.png', function (req, res, next) {
  res.sendFile(__dirname + '/images/logo.png');
});

app.get('/main.jpg', function (req, res, next) {
  res.sendFile(__dirname + '/images/jump.jpg');
});

function serveExample(exampleName) {

  app.get(exampleName + '/', function (req, res, next) {
    res.sendFile(__dirname + exampleName + '/index.html');
  });

  app.get(exampleName + '/style.css', function (req, res, next) {
    res.type('css');
    res.send(
      fs.readFileSync(__dirname + exampleName + '/style/normalize.css', 'utf8') +
      fs.readFileSync(__dirname + exampleName + '/style/grid.css', 'utf8') +
      fs.readFileSync(__dirname + exampleName + '/style/style.css', 'utf8')
    );
  });
}

serveExample('/example1');
serveExample('/example2');
serveExample('/example3');

module.exports = app.listen(3000);
