	cnpm install express --save-dev

hello min express

	var express = require('express'),
		app = express();
	
	app.get('/', function(req, res){
		res.send('hello world');
	});
	
	var server = app.listen(3000, function(){
		var host = server.address().address,
			port = server.address().port;
	
		console.log(host, port);
	})

