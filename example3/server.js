'use strict';
var fs = require('fs');

var express = require('express');

var app = express();

app.get('/Example1', function (req, res, next) {
  res.sendFile(__dirname + 'Example1/index.html');
});

app.get('/', function (req, res, next) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/logo.png', function (req, res, next) {
  res.sendFile(__dirname + '/images/logo.png');
});

app.get('/main.jpg', function (req, res, next) {
  res.sendFile(__dirname + '/images/jump.jpg');
});

app.get('/second.html', function (req, res, next) {
  res.sendFile(__dirname + '/second.html');
});

app.get('/style.css', function (req, res, next) {
  res.type('css');
  res.send(
    fs.readFileSync(__dirname + '/style/normalize.css', 'utf8') +
    fs.readFileSync(__dirname + '/style/grid.css', 'utf8') +
    fs.readFileSync(__dirname + '/style/style.css', 'utf8')
  );
});

module.exports = app.listen(3000);
