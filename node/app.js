var express = require('express'),
	app = express(),
	router = express.Router();

// 对网站首页的访问返回 "Hello World!" 字样
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// 网站首页接受 POST 请求
app.post('/', function (req, res) {
  res.send('Got a POST request');
});

// /user 节点接受 PUT 请求
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

app.get('/secret', function(req, res, next){
  	res.send('secret');
	next();
});

// /user 节点接受 DELETE 请求
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});


// 匹配id
// 在 GET /user/42以下是印刷:

// CALLED ONLY ONCE
// although this matches
// and this matches too
app.param('id', function (req, res, next, id) {
  console.log('CALLED ONLY ONCE');
  next();
})

app.get('/user/:id', function (req, res, next) {
  console.log('although this matches');
  next();
});

app.get('/user/:id', function (req, res) {
  console.log('and this matches too');
  res.end();
});


// 在 GET /user/42/3以下是印刷:

// CALLED ONLY ONCE with 42
// CALLED ONLY ONCE with 3
// although this matches
// and this matches too
app.param(['id', 'page'], function (req, res, next, value) {
  console.log('CALLED ONLY ONCE with', value);
  next();
})

app.get('/user/:id/:page', function (req, res, next) {
  console.log('although this matches');
  next();
});

app.get('/user/:id/:page', function (req, res) {
  console.log('and this matches too');
  res.end();
});


// app.path()
var app = express(),
	blog = express(),
	blogAdmin = express();

app.use('/blog', blog);
blog.use('/admin', blogAdmin);

console.log(app.path()); // ''
console.log(blog.path()); // '/blog'
console.log(blogAdmin.path()); // '/blog/admin'


// 静态文件托管
app.use('/public', express.static('html'));

var server = app.listen(4000, function(){
	var host = server.address().address,
		port = server.address().port;

	console.log(host, port);
});