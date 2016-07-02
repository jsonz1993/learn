var app = app || {};

app.Todo = Backbone.Model.extend({
	defaults: {
		title: '',
		complated: false
	},

	toggle: function(){
		this.save({
			complated: !this.get('complated')
		})
	}
});

