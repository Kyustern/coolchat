const app = require('express')();
const express = require('express');
const server = require('http').Server(app);
const io = require('socket.io')(server);

var port = process.env.PORT || 80;

app.use("/libs", express.static(__dirname + '/libs'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

server.listen(port, function () {
    console.log("Server running on port 3000")
});

io.on("connection", function(socket){

    console.log("Socket connection succesfull")

    socket.on("custom con", function(who){
        io.emit("custom con", who);
        console.log("A client has connected");
    });

    socket.on("message", function(message){
        console.log("Message event triggered")
        io.emit("message", message)
    });
});
