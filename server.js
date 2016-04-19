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

app.get('/logo-white-teal.svg', function (req, res, next) {
  res.sendFile(__dirname + '/example4/images/logo-white-teal.svg');
});

app.get('/logo-white.svg', function (req, res, next) {
  res.sendFile(__dirname + '/example4/images/logo-white.svg');
});

app.get('/child.jpg', function (req, res, next) {
  res.sendFile(__dirname + '/example4/images/child.jpg');
});

function serveExample(exampleName) {

  app.get(exampleName + '/', function (req, res, next) {
    res.sendFile(__dirname + exampleName + '/index.html');
  });

  app.get(exampleName + '/about', function (req, res, next) {
    res.sendFile(__dirname + exampleName + '/about.html');
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
serveExample('/example4');

module.exports = app.listen(3000);
