var child = require('child_process').fork('child.js');
// Open up the server object and send the handle.
var server = require('net').createServer();
server.on('connection', function (socket) {
socket.end('handled by parent');
});
server.listen(1337, function() {
child.send('server', server);
});
//curl localhost:1337
