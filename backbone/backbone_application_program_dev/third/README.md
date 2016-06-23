##模型

可以通过扩展Backbone.Model来创建模型

	var Todo = BackboneModel.extend({});
	
	var todo1 = new Todo();
	
	console.log(JSON.stringify(todo1));

#### 初始化 `initialize`

创建一个新模型实例时，`initialize`会被调用。该方法是可选的，目前经常用于监听变化。

	var Todo = Backbone.Model.extend({
		initialize: function(){
			console.log('this model has been initialized')
		}
	})


#### 默认值 `defaults`
很多时候，我们想让模型有一组默认值。可以使用`defaults`。

	var Todo = Backbone.Model.extend({
		initialize: function(){
			this.on('change', function(){
				console.log('.value for this model have changed');
			})
		},

		defaults: {
			title: '',
			completed: false
		}
	});


#### 赋值和取值
###### Model.get() 访问模型的属性

	todo1.get('title')

###### Model.toJSON() 获取模型属性的副本 [object]

该方法获取的是引用。

	todo1.toJSON().title.push(2);

###### Model.attributes 直接访问属性
如果直接访问  .attributes 上的属性来设置值，会绕过模型上绑定的触发器。

	todo1.attributes.title.pop();

###### Model.set() 设置属性
会触发`change`事件

	todo1.set({
		name : '11'
	});

如果`set`的同时，添加`{silent: true}` 则也会绕过`change`事件。

	todo1.set({
		name : '12'
	},{
		silent: true
	});

可以单独绑定：`change:title` 监听`title`变化

	initialize: function(){
		this.on('change:title', function(){
			console.log('title value for this model has changed');
		}) 
	}

###### 验证 Model.validate()

通过调用 `save()` 方法或带有 `{validate: true}`参数的 `set()`方法持久化模型，验证就会触发;

	var Person = new Backbone.Model({name: 'Jeremy'});

    Person.validate = function(attrs) {
    	if (!attrs.name) {
    		return 'i need you name';
    	}
    }

    Person.set({'name':'Jsonz'});
    console.log(Person.get('name')); // Jsonz
    console.log(Person.unset('name', {validate: true})) // false
    console.log(Person.get('name')); // Jsonz


如果有错误返回，`model`会触发`invalid`事件，同时会讲 `.validate()`的返回值赋值给 `validationError`属性。

	var Todo = Backbone.Model.extend({
		defaults: {
			completed: false
		},
	
		validate: function(attribs){
			if (attribs.title === undefined) {
				return 'Remember to set a title for your todo';
			}
		},
	
		initialize: function(){
			this.on('invalid', function(model, error){
				console.log(error);
			})
		}
	});
	
	var myTodo = new Todo();
	myTodo.set('completed',true, {validate: true});
	// log: Remember to set a title for your todo
	
	console.log('completed: ' + myTodo.get('completed')); // false 没有被修改到

## 视图 View

#### 创建视图
简单的扩展一个Backbone.View

	var TodoView = Backbone.View.extend({
        tagName: 'li',
        todoTpl: _.template('An example template'),
        events: {
            'ablclick table': 'edit',
            'keypress .edit': 'updateOnEnter',
            'blur .edit': 'close'
        },

        render: function(){
            this.$el.html( this.todoTpl(this.model.toJSON()));
            this.input = this.$('.edit');
            return this;
        },

        edit: function(){
            //....
        },

        close: function(){
            //....
        },

        updateOnEnter: function(e){
            //....
        }
    });

    var todoView = new TodoView();

    console.log(todoView.el); // <li></li>

#### View 里面的 el

View 的一个核心属性。

el是dom元素的一个引用，一个视图使用el构成他的元素内容，再一次性插入到DOM里，减少重排和重绘。

有两种方式可以使DOM和视图关联，一个是用用页面的元素，一个是创建新元素插入到页面。

为视图创建新元素可以使用 `tagName`,`id`,`className`.
`tagName`如果不指定的话，默认为`div`。

可以通过传入 `el` 来选定页面上的dom。

定义一个视图时，如果想在运行时指定相关的值，可以将 `options`,`el`,`tagName`,`id`,`className`定义为函数。

###### $el 与 $()

在视图中 `$el` 等价于 `$(view.el)`。 `$(selector)` 等价于 `$(view.el).find(selector)`。

###### setElement

如果想将现有的视图应用到另外一个不同的DOM元素，可以用 `setElement`。重写this.el 需要同时更改 dom 引用和在锌元素上重新绑定事件。

    var View = Backbone.View.extend({
        events: {
            click: function(e) {
                console.log(view.el === e.target);
            }
        }
    });

    var view = new View({el: button1});
    view.setElement(button2);

    button2.trigger('click');


el 属性表示的是视图即将渲染展示的页码标记。

	var view = new Backbone.View;
    view.setElement('<p><a><b>test</b></a></p>');
    console.log(view.$('a b').html())

###### render()

Backbone.View 的 render 最后都会返回this。

该试图可以在其他父视图中得到重用。

创建一批元素，可以不单独渲染和重回，而是一次性填充数组元素。

###### EVents 哈希
`Backbone`会自动把`events`里面的`this`指向自身。

也可以用 `_.bind(fn,this)`来自行绑定方法。

	events: {
        'click .toggle': 'toggleCompleted',
        'dblclick label': 'edit',
        'click .destory': 'clear',
        'blur .edit': 'close'
    },