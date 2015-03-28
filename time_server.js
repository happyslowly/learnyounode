var net = require('net');
var port = process.argv[2];

var server = net.createServer(function(socket) {
  socket.end(formatDate(new Date()) + '\n');  
});

function normalize(n) {
  return n < 10 ? '0' + n : n;
}

function formatDate(date) {
  return date.getFullYear() + '-' +
    normalize(date.getMonth() + 1) + '-' +
    normalize(date.getDate()) + ' ' +
    normalize(date.getHours()) + ':' + 
    normalize(date.getMinutes());
}

server.listen(port);