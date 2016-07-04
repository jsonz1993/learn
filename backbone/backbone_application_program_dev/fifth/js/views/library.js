var app = app || {};

app.AppView = Backbone.View.extend({
	// 选择视图挂载点
	el: '#todoapp',

	// 利用 _ 的模版处理选择模版
	statsTemplate: _.template($('#stats-template').html()),

	// 事件绑定
	events: {
		'keypress #new-todo': 'createOnEnter', //  添加事件
		'click #clear-completed': 'clearCompleted', // 清除事件
		'click #toggle-all': 'toggleAllComplete' // 反选所有的事件
	},

	// 初始化 挂载dom元素、 监听集合变化
	initialize: function(){
		this.allCheckbox = this.$('#toggle-all')[0];
		this.$input = this.$('#new-todo');
		this.$footer = this.$('#footer');
		this.$main = this.$('#main');

		this.listenTo(app.Todos, 'add', this.addOne); // 添加事件
		this.listenTo(app.Todos, 'reset', this.addAll); // 添加全部

		this.listenTo(app.Todos, 'change:completed', this.filterOne); //
		this.listenTo(app.Todos, 'filter', this.filterAll);
		this.listenTo(app.Todos, 'all', this.render);

		app.Todos.fetch();
	},

	render: function(){
		var completed = app.Todos.completed().length;
		var remaining = app.Todos.remaining().length;

		if (app.Todos.length) {
			this.$main.show();
			this.$footer.show();

			this.$footer.html(this.statsTemplate({
				completed: completed,
				remaining: remaining
			}));

		} else {
			this.$main.hide();
			this.$footer.hide();
		};

		this.allCheckbox.checked = !remaining;
	},


	// 根据传入的mode 实例化单个todo。
	// 并把实例化的view 加到视图
	addOne: function(todo){
		var view = new app.TodoView({model: todo});
		$('#todo-list').append(view.render().el);
	},

	// 循环整个集合，调用addOne
	addAll: function() {
		this.$('#todo-list').html('');
		app.Todos.each(this.addOne, this);
	},

	filterOne: function(todo){
		todo.trigger('visible');
	},

	filterAll: function(){
		app.Todos.each(this.filterOne, this);
	},

	newAttributes: function(){
		return {
			title: this.$input.val().trim(),
			order: app.Todos.nextOrder(),
			completed: false
		};
	},

	// 创建一个新模型，保存到localStorage中
	createOnEnter: function(event){
		if (event.which !== ENTER_KEY || !this.$input.val().trim()) {
			return;
		}
		app.Todos.create(this.newAttributes());
		this.$input.val('');
	},

	// 删除所有标记为已完成的todo项
	clearCompleted: function() {
		_.invoke(app.Todos.completed(), 'destroy');
		return false;
	},

	// 允许用户点击一个复选框，将所有todo项标记为已完成.
	toggleAllComplete: function(){
		var completed = this.allCheckbox.checked;

		app.Todos.each(function( todo ){
			todo.save({
				'completed': completed
			})
		});
	}
});