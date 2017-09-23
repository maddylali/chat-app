const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const clientPath = path.join(__dirname, '../public')
const app = express();
const server = http.createServer(app);
const port = process.env.port || 3000;

const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('client connected');
    socket.emit('newMessage', {
        from: 'Maddy',
        text: 'data sent',
        createdAt: 12569874
    });
    socket.emit('test', {
        from: 'test'
    });
    socket.on('disconnect', () => {
        console.log('client disconnected');
    });
    socket.on('createMessage', function (newEmail) {
        console.log('create Email', newEmail)
    });
})

app.use(express.static(clientPath));

server.listen(port, () => {
console.log('port is listening on: ', port)
});