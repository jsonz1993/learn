var app = app || {};

var TodoList = Backbone.Collection.extend({
	// 默认模型设置为Todo.
	model: app.Todo,

	// 持久化。个人理解 没有起服务器，所以在本地的存储模拟 .fetch .save .push 等等
	localStorage: new Backbone.LocalStorage('todos-backbone'),

	// 自定义函数，返回该集合上所有的 completed 状态的值
	completed: function(){
		return this.filter(function(todo){
			return todo.get('completed');
		})
	},

	// 利用 _ 的 without 方法和 completed ，返回除了 completed状态之外的数据组合成的数组
	remaining: function(){
		return this.without(this, this.completed());
	},

	// 返回下一个todo列表号 不知有何用??? 生成一个序列产生器
	nextOrder: function(){
		if (!this.length) {
			return 1;
		}
		return this.last().get('order') + 1;
	},

	// 返回该模型的order 不知为何 用于排序
	comparator: function(todo){
		return todo.get('order');
	}
});

app.Todos = new TodoList();