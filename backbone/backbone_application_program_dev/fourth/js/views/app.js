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
		this.allChekbox = this.$('#toggle-all')[0];
		this.$input = this.$('#new-todo');
		this.$footer = this.$('#footer');
		this.$main = this.$('#main');

		this.listenTo(app.Todos, 'add', addOne);
		this.listenTo(app.Todos, 'reset', addAll);

		this.listenTo(app.Todos, 'change:completed', this.filterOne);
		this.listenTo(app.Todos, 'filter', this.filterAll);
		this.listenTo(app.Todos, 'all', this.render);
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

	render: function(){
		var completed = ap.Todos.completed().length;
		var remaining = app.Todos.remaining().length;

		if (app.Todos.length) {
			this.$main.show();
			this.$footer.show();

			this$footer.html(this.statsTemplate({
				completed: completed,
				remaining: remaining
			}));

		} else {
			this.$main.hide();
			this.$footer.hide();
		};
	},



	createOnEnter: function(){

	}
});