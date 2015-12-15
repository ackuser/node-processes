var normal = require('child_process').fork('child.js', ['normal']);
var special = require('child_process').fork('child.js', ['special']);
// Open up the server and send sockets to child
var server = require('net').createServer();
server.on('connection', function (socket) {
// if this is a VIP
console.log(socket.remoteAddress);
if (socket.remoteAddress === '::ffff:127.0.0.1') {
special.send('socket', socket);
return;
}
// just the usual dudes
normal.send('socket', socket);
});
server.listen(1337);
