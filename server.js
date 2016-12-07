var mosca = require('mosca')
var server = new mosca.Server({ port: 1883, maxConnections: 1000 });

server.on('clientConnected', function(client) {
    console.log('client connected', client.id);
});