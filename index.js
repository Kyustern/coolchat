const app = require('express')();
const express = require('express');
const server = require('http').Server(app);
const io = require('socket.io')(server);

var port = process.env.PORT || 3000;

app.use("/libs", express.static(__dirname + '/libs'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

server.listen(port, function () {
    console.log("Server running on port 3000")
});