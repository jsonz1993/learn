## 概况

- 描述单个todo项的Todo模型
- 存储和持久化todo项的TodoList集合
- 创建todo项
- 展示todo项
- 编辑现有的todo项
- 标记一个todo项已完成状态
- 删除todo项
- 过滤所有已完成的todo列表

## 目录结构
- index.html
- css
	- base
- js
	- app.js 
	- lib
		- jQuery.js
		- underscore.js
		- backbone.js
		- backbone.localStorage.js 
	- collections
		- todos.js
	- models
		- todo.js
	- routers
		- router.js
	- views  
		- app.js
		- todos.js


#### 主app html 代码
	<section id="todoapp">
		<header id="header">
			<h1>todos</h1>
			<input id="new-todo" placeholder="What needs to be done?" autofocus>
		</header>
		<section id="main">
			<input id="toggle-all" type="checkbox">
			<label for="toggle-all">Mark all as complete</label>
			<ul id="todo-list"></ul>
		</section>
		<footer id="footer"></footer>
	</section>

#### 单条todo模版

	<script type="text/template" id="item-template">
		<div class="view">
			<input type="checkbox" class="toggle" <%= completed ? 'checked' : '' %>>
			<label><%- title %></label>
			<button class="destroy"></button>
		</div>
	</script>

#### 下方选择状态模版
	
	<script type="text/template" id="stats-template">
		<span id="todo-count">
			<strong><%= remaining %></strong>
			<%= remaining === 1 ? 'item' : 'items' %> lest
		</span>
		<ul id="filters">
			<li>
				<a class="selected" href="#">All</a>
			</li>
			<li>
				<a href="#/active">Active</a>
			</li>
			<li>
				<a href="#/completed">Completed</a>
			</li>
		</ul>
		<%= if (completed) {%>
		<button id="clear-completed">Clear completed (<%= completed %>) </button>
		<% } %>
	</script>

#### Model > todo.js

主要包含了默认值和 `toggle`函数，用于转换状态值
	
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


#### Collection > todos.js

为 todo Model 创建一个 Collection 包括返回不同状态的模型、 序列号和排序、 持久化localStorage功能、 默认模型的设置

	var app = app || {};
	
	var TodoList = Backbone.Collecton.extend({
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

#### View > app.js

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
	
			this.listenTo(app.Todos, 'add', addOne); // 添加事件
			this.listenTo(app.Todos, 'reset', addAll); // 添加全部
	
			this.listenTo(app.Todos, 'change:completed', this.filterOne); //
			this.listenTo(app.Todos, 'filter', this.filterAll);
			this.listenTo(app.Todos, 'all', this.render);
	
			app.Todos.fetch();
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
			if (events.which !== ENTER_KEY || !this.$input.val().trim()) {
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

#### View > todo

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

#### app.js

	var app = app || {};
	var ENTER_KEY = 13;
	
	$(function(){
		new app.AppView();
	});