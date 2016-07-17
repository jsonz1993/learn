var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Movie = require('./models/movie');
var path = require('path');
var _ = require('underscore');
var bodyParser = require('body-parser');


mongoose.connect('mongodb://localhost/imooc'); // 创建链接本地数据库

app.locals.moment = require('moment');
app.set('views', './views/pages');
app.use(express.static(path.join(__dirname, '/fr')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'jade');


// index page
app.get('/', function(req, res) {
	Movie.fetch(function(err, movies){
		if (err) { console.log(err) }

		res.render('index', {
			title: 'hello 首页',
			movies: movies
		})
	})
});
// 
// detail page
app.get('/movie/:id', function(req, res) {
	var id = req.params.id; //拿到链接id
	console.log(id);

	Movie.findById(id, function(err, movie){
		console.log(JSON.stringify(movie) + '----------')
		res.render('detail', {
			title: 'hello' + movie.title,
			movie: movie
		})
	})
	
});

// admin page
app.get('/admin/movie', function(req, res) {
	res.render('admin', {
		title: 'hello 后台录入',
		movie: {
			title: '',
			doctor: '',
			country: '',
			year: '',
			poster: '',
			flash: '',
			summary: '',
			language: '',
		}
	})
});

// admin update movie
app.get('/admin/update/:id', function(req, res) {
	var id = req.params.id;

	if (id) {
		Movie.findById(id, function(err, movie) {
			res.render('admin', {
				title: 'imooc 后台录入页',
				movie: movie
			})
		})
	}
});

// admin post movie
app.post('/admin/movie/new', function(req, res) {
	var id = req.body.movie._id;
	var movieObj = req.body.movie;
	var _movie;

	if (id !== 'undefined') {
		Movie.findById(id, function(err, movie) {
			if (err) {
				console.log(err);
			}

			_movie = _.extend(movie, movieObj);
			_movie.save(function(err, movie) {
				if (err) {
					console.log(err);
				}
				// 保存后跳转 相应页面
				res.redirect('/movie/' + movie._id)
			})
		})
	} else {
		_movie = new Movie({
			doctor: movieObj.doctor,
			title: movieObj.title,
			country: movieObj.country,
			language: movieObj.language,
			year: movieObj.year,
			poster: movieObj.poster,
			summary: movieObj.summary,
			flash: movieObj.flash
		})

		_movie.save(function(err, movie) {
			if (err) {
				console.log(err);
			}
			// 保存后跳转 相应页面
			res.redirect('/movie/' + movie._id)
		})
	}
})

// list page
app.get('/admin/list', function(req, res) {
	Movie.fetch(function(err, movies){
		if (err) { console.log(err) }

		res.render('list', {
			title: 'hello 列表页',
			movies: movies
		})
	})
});

//list delete movie
app.delete('/admin/list', function(req, res){
	var id = req.query.id;
	if (id) {
		Movie.remove({_id: id}, function(err, movie){
			if (err) {
				console.log(err);
			} else {
				res.json({ success: 1})
			}
		})
	}
});























var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

