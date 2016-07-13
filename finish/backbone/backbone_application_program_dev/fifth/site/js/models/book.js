var app = app || {};

app.BookModel = Backbone.Model.extend({
	defaults: {
		coverImage: 'img/pic.jpg',
		title: 'title',
		author: 'author',
		releaseDate: 'releaseDate',
		keywords: 'keywords'
	},

	parse: function(response){
		response.id = response._id;
		return response;
	}
});