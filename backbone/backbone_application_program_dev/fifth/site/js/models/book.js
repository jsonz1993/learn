var app = app || {};

app.BookModel = Backbone.Model.extend({
	defaults: {
		coverImage: 'img/pic.jpg',
		title: 'title',
		author: 'author',
		releaseDate: 'releaseDate',
		keywords: 'keywords'
	}
});