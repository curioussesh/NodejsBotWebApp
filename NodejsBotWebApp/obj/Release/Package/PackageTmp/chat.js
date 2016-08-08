'use strict';

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//let Wit = null;
//try {
//    // if running from repo
//    Wit = require('../').Wit;
//} catch (e) {
//    Wit = require('node-wit').Wit;
//}


const accessToken = 'KMQ36DTAU7N6EP4JDFIBX7IZLLKYKZ5T';



app.get('/', function (req, res) {
    res.sendFile(__dirname + '/chat.html');
});

io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});

http.listen(1337, function () {
    console.log('listening on *:1337');
});


