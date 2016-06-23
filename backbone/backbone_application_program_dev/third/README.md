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
    }


## 集合 Collection

集合是模型的组合。可以通过扩展 `Backbone.Collection`来创建

	var Todo = Backbone.Model.extend({
        defaults: {
            title: '',
            completed: false
        }
    });

    var TodosCollection = Backbone.Collection.extend({
        model: Todo
    });

    var myTodo = new Todo({title: 'read the whold book', id: 2});

    var todos = new TodosCollection([myTodo]);

    console.log(todos.length);

#### 添加和移除模型

	var a = new Todo({title: 'Go to Jamica'}),
        b = new Todo({title: 'Go to China'}),
        c = new Todo({title: 'Go to Disneyland'});

    var todos = new TodosCollection([a, b]);
    console.log(todos.length);

    todos.add(c);
    console.log(todos.length);

    todos.remove([a, b]);
    console.log(todos.length);

    todos.remove(c);
    console.log(todos.length);

#### 检索模型
最简单的方式就是使用集合的 `.get()`。接受一个`id`作为参数。

    var myTodo = new Todo({title: 'read the whole book', id: 2});
    var todos =new TodosCollection([myTodo]);
    var todo2 = todos.get(2);
    console.log(todo2 === myTodo);

在`Backbone`中可以用 `id`,`cid`,`idAttribute`属性来做唯一标识。

    // 使用 cid get
    var todoCid = todos.get(todo2.cid);
    console.log(todoCid === todo2);

#### 事件监听

	var TodosCollection = new Backbone.Collection();
    TodosCollection.on('add', function(todo){
        console.log(todo.get('title'));
    });
    TodosCollection.add([
        {title: 'go to Jamaica'},
        {title: 'go to China'},
        {title: 'go to Disneyland'}
    ]);

任何模型上都可以绑定`change`事件。
无效？？？

	var TodosCollection = new Backbone.Collection();
    TodosCollection.on('change:title', function(model){
        console.log(model.get('title'));
    });
    TodosCollection.add([{
        title: 'go to Jamaica',
        id: 3
    }]);
    var myTodo = TodosCollection.get(3);
    myTodo.set('title', 'go to fishing');
    console.log(myTodo.get('title'));

#### once

    var TodoCounter = {
        counterA: 0,
        counterB: 0
    };

    _.extend(TodoCounter, Backbone.Events);
    console.log(TodoCounter);
    var incrA = function(){
        TodoCounter.counterA += 1;
        TodoCounter.trigger('event');
    };
    var incrB = function(){
        TodoCounter.counterB += 1;
    };
    TodoCounter.once('event', incrA);
    TodoCounter.once('event', incrB);
    TodoCounter.trigger('event');
    console.log(TodoCounter.counterA === 1); // true
    console.log(TodoCounter.counterB === 1); // true

#### 重置和刷新集合
简单的替换整个集合内容

	 TodosCollection.on('reset', function(model, options){
        console.log('reset ');
        console.log(options.previousModels);
        console.log(model);
        console.log('-------------')
    })
    TodosCollection.reset([{
        title: 'go to Cuba',
        completed: false
    }]);
    console.log(TodosCollection.toJSON());

不传参数可以清空一个集合

	TodosCollection.reset();

## Underscore 实用函数

###### forEach 迭代集合
	Todos.forEach(function(model){
        console.log(model.get('title'));
    })

###### sortBy 通过特定属性对集合排序

	var sortedByAlphabt = Todos.sortBy(function(todo){
        return todo.get('title').toLowerCase();
    });

###### map 通过转换函数映射列表里的每个项，重新生成一个新集合。
	var count = 1;
    console.log(Todos.map(function(model){
        return count++ + '. ' + model.get('title');
    }));

###### min/max 获取特定属性为最小/最大值的model

	console.log(Todos.max(function(model){
        return model.id;
    }).id)

    console.log(Todos.min(function(model){
        return model.id;
    }).id)

###### pluck 获取特定属性的集合

	console.log(Todos.pluck('title'));

###### filter 过滤集合
	var Todos = Backbone.Collection.extend({
        model: Todo,
        filterById: function(ids) {
            return this.models.filter(function(c){
                return _.contains(ids, c.id);
            })
        }
    });

###### indexOf() 返回集合中特定索引位置的模型

	var People = new Backbone.Collection;
    People.comparator = function(a, b) {
        return a.get('name') < b.get('name') ? -1: 1;
    };
    var tom = new Backbone.Model({name: 'Tom'});
    var rob = new Backbone.Model({name: 'Rob'});
    var tim = new Backbone.Model({name: 'Tim'});
    People.add(tom);
    People.add(rob);
    People.add(tim);
    console.log(People.indexOf(rob) === 0,People.indexOf(tim) === 1, People.indexOf(tom) === 02)

###### some() 通过迭代器测试集合中是否存在特定的模型

    Todos.some(function(model){
        return model.id === 100;
    })

###### size 返回集合的大小

	Todos.size();
	等于
    Todos.length;

###### isEmpty 判断是否是空的集合

	var isEmpty = Todos.isEmpty();

###### groupBy 通过模型的属性将集合进行分组

	
	var Todos = new Backbone.Collection();

    Todos.add([{
        id: 1,
        title: 'go to Jamaica',
        completed: false
    }, {
        id: 2,
        title: 'go to China',
        completed: false
    }, {
        id: 3,
        title: 'go to Disneyland',
        completed: true
    }]);
    var byCompleted = Todos.groupBy('completed');
	// false: [id1,id2]; true: [id3]
    var completed = new Backbone.Collection(byCompleted[true]);
    console.log(completed.pluck('title'));

###### `pick` 过滤出模型特定属性的属性值 与 `omit`相反

	var Todo = Backbone.Model.extend({
        defaults: {
            title: '',
            completed: false
        }
    });
    var todo = new Todo({title: 'go to Austria.'});
    console.log(todo.pick('title'));

###### `omit` 过滤出除模型特定属性以外的属性值 与`pick`对应
	var todo = new Todo({title: 'go to Austria'});
    console.log(todo.omit('title'));

###### `keys` 和 `values`
返回collection的keys[arrays] 和 values[arrays]

    console.log(todo.keys());
    console.log(todo.values());

###### pairs
将对象转为[key,value]

	console.log(todo.pairs());

###### invert
将对象的第一个对象的keys 和values 呼唤后创建一个新对象。

	console.log(todo.invert());

#### 链式API

通过 _.chain()

	var collection = new Backbone.Collection([
        {name: 'Tim', age: 5},
        {name: 'Ida', age: 26},
        {name: 'Rob', age: 55}
    ]);

    var filteredNames = collection.chain()
        .filter(function(item){return item.get('age') > 10})
        .map(function(item){ return item.get('name')})
        .value();
    console.log(filteredNames);

## RESTful 持久化 一知半解

#### 从服务器上获取模型

`COllections.fetch()` 通过发送__HTTP GET__ 请求到__URL__上。从服务器取得JSON数组形式的模型数据集。一旦数据接收，Backbone将执行 set() 函数来更新集合。

	var TodosCollection = Backbone.Collection.extend({
        model: Todo,
        url: 'https://api.github.com/gists/public'
    });

    var todos = new TodosCollection();
    todos.fetch(); // sends HTTP GET to /todos

#### 保存模型到服务器

调用`save()`方法将在集合的URL上附加一个id来构造新的URL然后发送 __HTTP PUT__ 请求到服务器。

会报错，不会调试 ？？？

	// 保存模型到服务器
    var todo2 = todos.get(2);
    todo2.set('title', 'go fishing');
    todo2.save(); // sends HTPTP PUT to /https://api.github.com/gists/public/2

    todos.create({title: ' try out codee samples'});


#### 从服务器删除模型

通过 `destroy()`方法从集合和服务器中删除一个存在的模型。
与 `Collection.remove()` 不同，`remove`只是从集合中删除一个模型，而 `Model.destroy()`还会向集合URL发送一个 __HTTP DELETE__ 请求


#### 选项 
每一个 __RESTful API__ 方法都接受各种各样的可选参数。所有的方法都接受 成功(success) 和 错误(error) 回调。 用于自定义处理服务器响应。

在 Model.save() 上指定 `{patch: true}`选项，将使用 __HTTP PATCH__请求，仅仅发送已经改变的属性到服务器上，而不是发送整个模型。也就是 `model.save(attrs, { patch: true})`


## 事件
事件是一个基本的控制反转。

掌握事件是让Backbone开发最有效的一种快捷方式。

`Backbone.Events` 混入到其他的`Backbone`类 包括：
- Backbone
- Backbone.Model
- Backbone.Collection
- Backbone.Router
- Backbone.History
- Backbone.View

#### `on`,`off`,`trigger`

`Backbone.Events` 可以让任何对象具有绑定和触发事件的能力。

    var ourObject = {};
    _.extend(ourObject, Backbone.Events);
    ourObject.on('dance', function(){
        console.log('ourObject is dance');
    });
    ourObject.trigger('dance'); // is dance

	// 命名空间
    ourObject.on({
        'dance:tap': function(){
            console.log('tap')
        },
        'dance:t': function(){
            console.log('t');
        }
    });
    ourObject.trigger('dance:t'); // t
	ourObject.trigger('dance'); // is dance

	// all 事件，不管触发什么事件都会触发该事件
	ourObject.on('all', function(){
        console.log('yoyo');
    })

	// 用命名空间删除改事件
    ourObject.off('dance:t');

    // 触发多组事件
    ourObject.trigger('dance dance:tap');

    // 传递参数
    ourObject.on('tt', function(name, age){
        console.log(name + " : " + age);
    });

    ourObject.trigger('tt', 'Jsonz', 20);



#### `listenTo` && `stopListening`

    var a = _.extend({}, Backbone.Events);
    var b = _.extend({}, Backbone.Events);
    var c = _.extend({}, Backbone.Events);

    a.listenTo(b, 'anything', function(event){
        console.log('anything happended');
    });
    a.listenTo(c, 'everything', function(event){
        console.log('everything');
    });

    b.trigger('anything');

    a.stopListening();

    b.trigger('anything');
    c.trigger('everything');

一般要移除的视图在模型上注册了事件监听，而我们没有删除模型或者移除该视图的事件处理函数，那么移除视图的时候就会引起错误。

`View.remove()`的默认实现里调用了一次 `stopListening()`，确保在视图销毁之前所有的`listento()`绑定的监听器进行解绑。


#### 事件和视图

使用`events`属性绑定的事件，回调里的`this`指向的是视图对象，使用`jQuery`绑定的所有事件，`this`都会被`jQuery`设置为该DOM元素。


## 路由

一个应用程序通常至少有一个路由将__URL__路由映射到一个函数上，用于判断用户访问这个路由会发生什么。

	'route': 'mappedFunction'
	var TodoRouter = Backbone.Router.extend({
	    // define the route and function maps for this router
	    routes: {
	        'about': 'showAbout',// http://****/#about
	        
	        'todo/:id': 'getTodo',
	        // this is an example of using a ":param" variable, which allows us to match any of the components between two URL slashes
	        // http://***/#todo/5
	        
	        'search/:query': 'searchTodos',
	        // we can also define multiple routers that are bound how we're optionally passing in a reference to a page number if one is supplied
	        //http://***/#search/job
	        
	        'search/:query"p:page': 'searchTodos',
	        // as we can see URLs may contain as many ':param' as we wish
	        // http://***/#search/job/p1
	        
	        'todos/:id/download/*documentPath': 'downloadDocument',
	        // this is an example of using a *splat. Splats are able to match  any number of URL components and can be combined with ':param'
	        // http://***/#todos/5/download/todos.doc
	        
	        '*other': 'defaultRoute',
	        // http://***/#<anythiong>*/
	        
	        'optional(/:item)': 'optionalItem',
	
	        'named/optional/(y:z)': 'namedOptionalItem',
	        // ROuter URLs also support optional parts via parentheses without having to use a regex
	    },
	
	    showAbout: function(){},
	
	    getTodo: function(id){
	        console.log('you are trying to reach todo ' + id);
	    },
	
	    searchToods: function(query, page) {
	        var page_number = page || 1;
	        console.log('page number ' + page_number + ' of the results for todos containing the word ' + query)
	    },
	
	    downloadDocument: function(id, path){},
	
	    defaultRoute: function(other) {
	        console.log('other ' + other);
	    }
	});

    var myTodoRouter = new TodoRouter();

__可以用在路由器回调里使用`.navigate()`方法更新路由。默认情况下不触发 `hashchange`事件。

	this.navigate('todo/'+ id + '/edit')

	也可以用
	his.navigate('todo/2',{trigger: true}); 来触发 hashchange 事件


## Backbone 同步 API

sync
路由改变也会触发 `route`事件。

Backbone.Backbone.
路由改变也会触发 `route`事件。

`Backbone.` 类似 `$.ajax()`

	Backbone.emulateHTTP = false
	// set to true if server cannot handle HTTP PUT or HTTP DELETE

	Backbone.emulateJSON = false;
	// set to true if server cannot handle application/json requests

 每次__Backbone__尝试读取，保存，删除模型的时候，__Backbone.sync__都会调用一次。他使用__jQuery__实现来发送这些 __RESTful__请求。

重载实现`Backbone.sync`  见 __p64__

## 依赖文件

__硬依赖Underscore.js__

__依赖json2.js和jQuery来支持RESTful持久化和history__


