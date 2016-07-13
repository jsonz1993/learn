var app = app || {};

app.TodoView = Backbone.View.extend({
	tagName: 'li',

	template: _.template( $('#item-template').html() ),

	events: {
		'click .toggle': 'togglecompleted',
		'click .destroy': 'clear',
		'dblclick label': 'edit',
		'keypress .edit': 'uppdateOnEnter',
		'blur .edit': 'close'
	},

	initialize: function(){
		this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.model, 'destroy', this.remove);
		this.listenTo(this.model, 'visible', this.toggleVisible);
	},

	render: function(){
		this.$el.html(this.template( this.model.toJSON() ));

		this.$el.toggleClass('completed', this.model.get('completed'));
		this.toggleVisible();

		this.$input = this.$('.edit');
		return this;
	},

	toggleVisible: function(){
		this.$el.toggleClass('hidden', this.isHidden());
	},

	isHidden: function(){
		var isCompleted = this.model.get('completed');
		return (
			(!isCompleted && app.TodoFilter === 'completed')
			|| (isCompleted && app.TodoFilter === 'active')
		);
	},

	togglecompleted: function(){
		this.model.toggle();
	},

	edit: function() {
		this.$el.addClass('editting');
		this.$input.focus();
	},

	close: function(){
		var val = this.$input.val().trim();

		if (val) {
			this.model.save({title: val});
		}
		this.$el.removeClass('editing');
	},

	updateOnEnter: function(e) {
		if (e.which === ENTER_KEY) {
			this.close();
		}
	},

	clear: function(){
		this.model.destroy();
	}
})