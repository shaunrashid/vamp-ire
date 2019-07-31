"use strict";

const express = require("express");
const hbs = require("express-hbs");

const port = 8001;
const applicationName = "vamp(ire)!";
const serverStartMessage = `${applicationName} running on port ${port}`;

const app = express();

app.get('/', function(req, res) {
    res.render('home');
});

app.post('/fight', function(req, res) {
    res.render('fight');
});

app.post('/gameover', function(req, res) {
    res.render('gameover');
});

app.engine('hbs', hbs.express4());

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

const server = app.listen(port, function() {
    console.log(serverStartMessage);
});