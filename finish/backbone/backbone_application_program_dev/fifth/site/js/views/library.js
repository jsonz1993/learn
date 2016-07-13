var app = app || {};

app.LibraryView = Backbone.View.extend({
	el: '#books',

	events: {
		'click #add': 'addBook'
	},

	initialize: function() {
		window.t = this.collection = new app.Library();
		this.collection.fetch({reset: true}); // 初始化后去后台请求数据。触发reset

		this.listenTo(this.collection, 'add', this.renderBook);
		this.listenTo(this.collection, 'reset', this.render); // 触发reset后，调用render

		this.render();
	},

	render: function(){
		this.collection.each(function(item) {
			this.renderBook(item);
		}, this);
	},

	renderBook: function(item){
		var bookView = new app.BookView({
			model: item
		});
		this.$el.append(bookView.render().el);
	},

	addBook: function(e){
		e.preventDefault();

		var formData = {};

		$('#addBook div').children('input').each(function(i, el){
			if ($(el).val() != '') {
				formData[el.id] = $(el).val();
			}
			$(el).val('');
		});

		this.collection.create(formData);
	}
})