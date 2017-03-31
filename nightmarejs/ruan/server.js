var httpServer = require('http-server'),
	server = httpServer.createServer();

server.listen(8080);
process.send('listening');