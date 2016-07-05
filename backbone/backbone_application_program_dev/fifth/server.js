// Module dependencies
var application_root = __dirname,
    express = require('express'), // web framework
    path = require('path'), // utilities for dealing with file paths
    mongoose = require('mongoose');

// create server;
var app = express();

// configure server
// parses request body and populates request.body
app.use(express.bodyParser());

// checks request.body for HTTP method overrides
app.use(express.methodOverride());

//perform route lookup based on URL and HTTP method
app.use(app.router);

// where to serve static content
app.use(express.static(path.join(application_root, 'site')));

//show all errors in development
app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));


// Start server
var port = 4711;

app.listen(port, function() {
    console.log('Express servver listeningon port %d in %s mode.', port, app.settings.env);
});

app.get('/api', function(request, response) {
    response.send('Library APIis running');
});

// Connect to database
mongoose.connect('mongodb://localhost/library_database');

// Schemas
var Keywords = new mongoose.Schema({
	keyword: String
});
var Book = new mongoose.Schema({
    title: String,
    author: String,
    releaseDate: Date,
    keywords: [ Keywords ] // new
});


var BookModel = mongoose.model('Book', Book);

// get all
app.get('/api/books', function(request, response) {
    return BookModel.find(function(err, books) {
        if (!err) {
            return response.send(books);
        } else {
            return console.log(err);
        }
    });
});


// post
app.post('/api/books', function(request, response) {
    var book = new BookModel({
        title: request.body.title,
        author: request.body.author,
        releaseDate: request.body.releaseDate,
        keyword: request.body.keywords
    });

    book.save(function(err) {
        if (!err) {
            return console.log('created');
        } else {
            return console.log(err);
        }
    });

    return response.send(book);
});


// get by id
app.get('/api/books/:id', function(request, response) {
	return BookModel.findById(request.params.id, function(err, book) {
		if (!err) {
			return response.send(book);
		} else {
			return console.log(err);
		}
	});
});


// put
app.put('/api/books/:id', function(request, response) {
	console.log('Updating book' + request.body.title);

	return BookModel.findById(request.params.id, function(err, book) {
		book.title = request.body.title;
		book.author = request.body.author;
		book.releaseDate = request.body.releaseDate;
		book.keywords = request.body.keywords;

		return book.save( function(err) {
			if (!err) {
				console.log('book updated');
			} else {
				console.log(err);
			}
			return response.send(book);
		})
	})
});


// delete
app.delete('/api/books/:id', function(request, response){
	console.log('Deleting book with id: ' + request.params.id);
	return BookModel.findById(request.params.id, function(err, book) {
		return book.remove(function(err) {
			if (!err) {
				console.log('Book removed');
				return response.send('');
			} else {
				console.log(err);
			}
		});
	});
});
