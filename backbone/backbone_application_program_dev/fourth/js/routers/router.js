var Workspace = Backbone.Router.extend({
	routes: {
		'*filter': 'setFilter',
	},

	setFilter: function(param) {
		// window.app.Todos.trigger('filter');
		console.log(param);
	}
});

app.TodoRouter = new Workspace();
Backbone.history.start();