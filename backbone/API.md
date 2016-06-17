- [Events](#events)
- [Model](#model)
- [Collection](#collection)
- [Router](#router)


<h2 id="events">Backbone.Events</h2>

	var object = {};
	
	_.extend(object, Backbone.Events);
	
	object.on("alert", function(msg) {
	  alert("Triggered " + msg);
	});
	
	object.trigger("alert", "an event");

###### on 绑定事件

object.on(event, callback, [content])
	
	object.on('change:title change:author', ...);
	
	object.on('all', ...);
	
	object.on({
		'change:title': titleView.update,
		'change:author': authorPane.update,
		'destroy': bookView.remove
	})

###### off 移除句柄

object.off([event], [callback], [context]);

	object.off('change', onchange);
	
	object.off('change');
	
	object.off(null, onChange);
	
	object.off(null, null, context);
	
	object.off();

###### trigger 触发事件

object.trigger(event, [*args])

触发给定 event 或用空格隔开的事件的回调函数，后续传入 trigger的参数会被传递到触发的事件回调中

	object.trigger('click change', 'msg')

###### once 绑定一次性事件

和 `on` 一样，但是触发一次之后就解绑。

###### listenTo 

让 __object__ 监听__另一个__对象上的一个特定事件，不使用 `other.on(event, callback, object)`，这种形式有一个优点就是：__listenTo__ 允许 __object__来跟踪 这个特定事件，并且后面可以一次性全部移除他们。 __callback__ 总在__object__上下文中被调用

	object.listenTo(other, event, callback);
	
	view.listenTo(model, 'change', view.render);

###### stopListening

object.stopListeneing([other], [event], [callback])

让 object 停止监听事件。如果调用不带参数的stopListening，可以移除 object 下所有已经registered(注册)的callback函数...，或者只删除指定对象上明确告知的监听事件，或者一个删除指定事件，或者只删除指定的回调函数。

	view.stopListening();
	
	view.stopListening(model);

###### listenToOnce

和`listenTo` 很像，类似 `on` 和 `once`

###### 事件目录

- `add`(model, collection, options) 当一个model 被添加到 collection 时触发

- `remove`(model, collection, options) 当一个model从一个collection移除时触发
- `reset` (collection, options) 当该collection的全部内容被替换时触发
- `sort` (collection, options) 当该 collection 的内容被替换时触发
- `change`(model, options) 当一个model的属性改变时触发
- `change:[attribute]`(model, value, options) 一个model的某个特定属性更新时被触发
- `destroy`(model, collection, options) 当一个model被销毁时触发
- `request`(model_or_collection, xhr, options) 当一个model或 collection 开始发送请求到服务器时触发
- `sync`(model_or_collection, resp, option) 当一个model或 collection 成功同步到服务器时触发
- `error`(model_or_collection, resp, options) 当一个model或 collection 的请求远程服务器失败时触发
- `invalid` (model, error, options) 当model在客户端验证失败时触发
- `route:[name]`(params) 当一个特定的route 相匹配时通过路由器触发
- `route` (route, params) 当任何一个 route相匹配时通过路由器触发。
- `all` 所有事件发生都会触发这个事件，第一个参数是触发事件的名称。

<h2 id="model">Backbone.Model 模型</h2>

Models（模型）是任何Javascript应用的核心，包括数据交互及与其相关的大量逻辑： 转换、验证、计算属性和访问控制。你可以用特定的方法扩展 Backbone.Model，Model 也提供了一组基本的管理变化的功能。

		// 加一个model
		var Sidebar = Backbone.Model.extend({
			promptColor: function(){
				var cssColor = prompt('Please enter a css color:');
				this.set({color: cssColor});
			}
		});

		// 实例化model
		window.sidebar = new Sidebar();

		// 给model绑定事件
		sidebar.on('change:color', function(model, color){
			$('#sidebar').css({background: color});
			sidebar.promptColor();
		});

		// 修改数据以触发事件
		sidebar.set({color: 'red'});

###### extend

可以正确的设置原型链，因此通过extend 创建的子类也可以被深度扩展

	var Node = Backbone.Model.extend({
		initialize: function(){},

		aut
hor: function(){},

		coordinates: function(){},

		allowedToEdit: function(account) {
			return true;
		}
	});

	var PrivateNode = Node.extend({
		allowedToEdit: function(account){
			return account.owns(this);
		}
	});

###### constructor / initialize
new Mode([attributes], [options])

当创建model实例时，可以传入属性(attributes)初始值，这些值会被 set 到 model。如果定义了 initalize 函数，该函数在model创建后执行。

	new PrivateNode({
		title: 'one Thousand and one nights',
		author: 'Scheherazade'
	})

###### get
model.get(attribute)

从当前model中获取当前属性值，比如 `note.get('title')`

###### set
mode.set(attributes, [options])

向model设置一个或多个hash属性，如果任何一个属性改变了 model 的状态，在不传入 {silent: true} 选项参数下： 会触发 `"change"`事件，更改特定属性的事件也会触发。 可以绑定事件到某个函数 如 `change:title` 及 `change:content`。

	note.set({title: 'March 20', content: 'in his eyes'})

###### escape
model.escape(attribute)

与 `get`类似，只是返回的是html转义后的model属性，如果model插入数据到html，使用escape取数据可以避免XSS攻击
	
	var hacker = new Backbone.Model({
	  name: "<script>alert('xss')</script>"
	});
	
	alert(hacker.escape('name'));


###### has
model.has(attribute)

属性值为非null 或非 undefined 时返回 `true`


###### unset
model.unset(attribute, [options])
从内部属性散列表中删除指定属性(attribute)。如果未设置`silent`选项，就会触发`change`事件

###### clear
model.clear([options])

从model中删除所有属性，包括 `id` 属性，如果未设置 `silent` 选项，会触发 `change`事件

###### id
model.id

id 是model的特殊属性，可以是任意字符串。在属性中设置`id`会被直接 拷贝到model属性上，我们可以从collectios中通过`id`获取`model`。`id`通常用于生成`model`的URLs。

###### idAttribute 不大理解
model.idAttribute

一个model的唯一标识符，被存储在`id`属性下。如果使用一个不同的唯一key直接和后端通信，可以设置model的`idAttribute`到一个从 `key` 到 `id` 的一个透明映射中。

###### cid  不大理解
model.cid

model的特殊属性，cid或客户`id`是当所有model创建时自动产生的唯一标识符。客户ids在model尚未保存到服务器之前就存在，此时model可能人不具有最终的 id 但已经需要在用户界面可见。

###### attributes 
model.attributes
 
attributes属性是包含模型状态的内部散列表 -- 通常 JSON 对象的形式表示在服务器上模拟数据。他通常是数据库中一个行的简单序列，但它也可以是客户端的计算状态。

建议用 `set` 更新__attributes__ 而不要直接修改。如果你想要索引和获取模型属性的副本，用 `_.clone(model.attributes)` 取而代之

###### changed 不大理解
model.changed

changed属性是一个包含所有属性的内部散列。由`set`内部维护，changed的副本可从 changedAttributes 获得。

###### defaults
model.defaults or model.defaults()

defaults 散列（或函数） 用于为模型指定默认属性。创建模型实例时，任何未指定的属性会被设置为其默认值。
	
	var Meal = Backbone.Model.extend({
	  defaults: {
	    "appetizer":  "caesar salad",
	    "entree":     "ravioli",
	    "dessert":    "cheesecake"
	  }
	});

###### toJSON
model.toJSON([options])

返回一个模型的`attributes`浅拷贝副本的JSON字符串形式。它可用于模型的持久化、序列化，或者发送到服务前的扩充。该方法名称比较混乱，因为他事实上并不返回JSON字符串。

	var artist = new Backbone.Model({
	  firstName: "Wassily",
	  lastName: "Kandinsky"
	});
	
	artist.set({birthday: "December 16, 1866"});
	
	alert(JSON.stringify(artist));

###### sync
model.sync(method, model, [options])

使用`Backbone.sync` 将一个模型的状态持续发送到服务器。

###### fetch
model.fetch([options])

通过委托给Backbone.sync从服务器重置模型的状态。返回jqXHR。 如果模型从未填充数据时非常有用， 或者如果你想确保你有最新的服务器状态。 如果服务器的状态不同于当前属性的"change"事件将被触发。 接受 success 和 error回调的选项散列， 这两个回调都可以传递(model, response, options)作为参数。

	// 每隔 10 秒从服务器拉取数据以保持频道模型是最新的
	setInterval(function() {
	  channel.fetch();
	}, 10000);

###### save
model.save([attributes], [options])

通过委托给Backbone.sync，保存模型到数据库（或替代持久化层）。 如果验证成功，返回jqXHR，否则为 false。 attributes散列（如set）应包含你想改变的属性 - 不涉及的键不会被修改 - 但是，该资源的一个完整表示将被发送到服务器。 至于set，你可能会传递单独的键和值，而不是一个哈希值。 如果模型有一个validate方法，并且验证失败， 该模型将不会被保存。 如果模型isNew， 保存将采用"create"（HTTP POST）， 如果模型在服务器上已经存在， 保存将采用"update"（HTTP PUT）。

相反，如果你只想将改变属性发送到服务器， 调用model.save(attrs, {patch: true})。 你会得到一个HTTP PATCH请求将刚刚传入的属性发送到服务器。

通过新的属性调用save 将立即触发一个"change"事件，一个"request"事件作为Ajax请求开始到服务器， 并且当服务器确认成功修改后立即触发 一个"sync"事件。 如果你想在模型上等待服务器设置新的属性，请传递{wait: true}。

在下面的例子中， 注意我们如何覆盖Backbone.sync的版本，在模型初次保存时接收到 "create"请求，第二次接收到 "update" 请求的。

	Backbone.sync = function(method, model) {
	  alert(method + ": " + JSON.stringify(model));
	  model.set('id', 1);
	};
	
	var book = new Backbone.Model({
	  title: "The Rough Riders",
	  author: "Theodore Roosevelt"
	});
	
	book.save();

save 支持在选项散列表中传入 success 和 error 回调函数， 回调函数支持传入 (model, response, options) 作为参数。 如果服务端验证失败，返回非 200 的 HTTP 响应码，将产生文本或 JSON 的错误内容。

	book.save("author", "F.D.R.", {error: function(){ ... }});


###### destroy

通过委托给Backbone.sync，保存模型到数据库（或替代持久化层）。 通过委托一个HTTP DELETE请求给Backbone.sync破坏服务器上的模型。 返回一个jqXHR对象， 或者如果模型isNew，那么返回false。 选项散列表中接受 success 和 error 回调函数， 回调函数支持传入 (model, response, options) 作为参数。 在模型上触发 "destroy" 事件，该事件将会冒泡到任何包含这个模型的集合中， 一个"request"事件作为Ajax请求开始到服务器， 并且当服务器确认模型被删除后立即触发 一个"sync"事件。如果你想在集合中删除这个模型前等待服务器相应，请传递{wait: true}。

	book.destroy({success: function(model, response) {
	  ...
	}});

###### Underscore 方法

代理了UndersoreJs提供6个函数。
- keys
- values
- pairs
- invert
- pick
- omit

###### validate
model.validate(attributes, options)

`validate`在`save`之前调用，如果传递了`{validate:true}`，也可以在`set`之前调用。

如果验证错误则返回错误信息，不执行`save`。验证失败则会触发`invalid`事件，并将该方法返回值设置在`validationError`上。

###### validationError
model.validationError

用validate最后验证失败时返回的值

###### isValid
model.isValid()

运行validate 来检查模型状态
	
	var Chapter = Backbone.Model.extend({
	  validate: function(attrs, options) {
	    if (attrs.end < attrs.start) {
	      return "can't end before it starts";
	    }
	  }
	});
	
	var one = new Chapter({
	  title : "Chapter One: The Beginning"
	});
	
	one.set({
	  start: 15,
	  end:   10
	});
	
	// one.isValid()  返回验证结果 true / false
	if (!one.isValid()) {
	  alert(one.get("title") + " " + one.validationError);
	}

###### url 不理解

[http://www.css88.com/doc/backbone/#Model-url](http://www.css88.com/doc/backbone/#Model-url)

model.url()

返回模型资源在服务器上位置的相对 URL 。 如果模型放在其它地方，可通过合理的逻辑重载该方法。 生成 URLs 的默认形式为："/[collection.url]/[id]"， 如果模型不是集合的一部分，你可以通过指定明确的urlRoot覆盖。


###### urlRoot 不理解

	var Book = Backbone.Model.extend({urlRoot : '/books'});
	
	var solaris = new Book({id: "1083-lem-solaris"});
	
	alert(solaris.url());


##### parse  不理解
model.parse(response, options)

parse 会在通过 fetch 从服务器返回模型数据，以及 save 时执行。 传入本函数的为原始 response 对象，并且应当返回可以 set 到模型的属性散列表。 默认实现是自动进行的，仅简单传入 JSON 响应。 如果需要使用已存在的 API，或者更好的命名空间响应，可以重载它。

###### clone

model.clone()

返回该模型的具有相同属性的新实例

###### isNew
model.isNew()

该模型是否已经保存到服务器。 如果模型没 `id` 则被视为新的。

###### hasChanged
model.hasChanged([ttribute])

标识模型从上次set事件发生后是否改变过。如果传入 `attribute` 当指定属性改变后，返回 `true`。


	book.on('change', function(){
		if (book.hasChanged('title')){
			...
		}
	});

###### changedAttributes
model.changedAttributes([attributes])

只从最后一次`set`开始检索已改变的模型属性散列，或者如果没有，返回`false`。 这可以用来找出视图哪些部分应该更新，那些需要和服务器保持同步。

###### previous
model.previouts(attribute)

在`change`事件发生的过程中，该方法可以获取已改变属性的旧值。

	var bill = new Backbone.Model({
	  name: "Bill Smith"
	});
	
	bill.on("change:name", function(model, name) {
	  alert("Changed n ame from " + bill.previous("name") + " to " + name);
	});
	
	bill.set({name : "Bill Jones"});

###### previousAttributes
model.previousAttributes() 

返回模型的上一个属性的副本。一般用于获取模型的不同版本之间的区别，或者当发生错误时回滚模型状态。

<h2 id="collection">Bacckbone.collection</h2>

集合是模型的有序组合，我们可以在集合上绑定`change`事件，从而当集合中的模型发生变化时 `fetch`获得通知，`collertion` 也可以监听 `add`和 `remove` 事件，从服务器更新，并使用 `underscoreJs`提供的方法。

监听集合中模型的变化 `documents.on(change:selected,..)`

###### extend
Backbone.Collection.extend(properties, [classProperties])

通过拓展__Backbone.Collection__ 创建一个 __Collecction__类。实例属性参数__properties__以及 类属性参数__classProperties__会被直接注册到集合的构造函数。

###### model
collection.model

覆盖次属性来指定集合中包含的模型类。可以传入原始属性对象和数组来 `add`、`create`、`reset`传入的属性会被自动转换为适合的模型类型。

	var Library = Backbone.Collection.extend({
	  model: Book
	});

集合也可以包含多态模型，通过用构造函数重写这个属性，返回一个模型。

	var Library = Backbone.Collection.extend({
	
	  model: function(attrs, options) {
	    if (condition) {
	      return new PublicDocument(attrs, options);
	    } else {
	      return new PrivateDocument(attrs, options);
	    }
	  }
	
	});

###### constructor/ initialize 不理解
new Backbone.Collection([models], [options])

当创建集合时，你可以选择传入初始的 models 数组。 集合的 comparator 函数也可以作为选项传入。 传递false作为comparator选项将阻止排序。 如果定义了 initialize 函数，会在集合创建时被调用。 有几个选项， 如果提供的话，将直接附加到集合上：model 和 comparator。
通过传递null给models选项来创建一个空的集合。

	var tabs = new TabSet([tab1, tab2, tab3]);
	var spaces = new Backbone.Collection([], {
	  model: Space
	});

###### models
collection.models

访问集合中模型的内置的JavaScript 数组。通常我们使用 get， at，或 Underscore方法 访问模型对象，但偶尔也需要直接访问。

###### toJSON
colletion.toJSON([options])

返回集合中包含的每个模型的属性哈希的数组。可用于集合的序列化和持久化。

	var collection = new Backbone.Collection([
	  {name: "Tim", age: 5},
	  {name: "Ida", age: 26},
	  {name: "Rob", age: 55}
	]);
	
	alert(JSON.stringify(collection));

###### sync 不理解
collection.sync(method, collection, [options])
 
使用 Backbone.sync来将一个集合的状态持久化到服务器。 可以自定义行为覆盖。

###### add
collection.add(models, [options])

向集合中添加一个模型，触发`add`事件。


		var ships = new Backbone.Collection;

		ships.on('add', function(ship){
			console.log('ahoy' + ship.get('name') + '!');
		});

		ships.add([
			{name: '111'},
			{name: '2222'}
		])
		
		// 输出 111 2222

###### remove
collection.remove(models, [options])

从集合删除一个模型（或组），并返回他们。触发 `remove`。

###### reset
collection.reset([models], [options])

将一个新模型列表替换集合。最后触发一个单独的`reset`事件。
在一个`reset`事件中，任何以前的模型列表可作为 `options.previousModels`。通过传递`null`和 `models` 选项来清空你的集合。

	var accounts = new Backbone.Collection;
	accounts.reset(<%= @accounts.to_json %>);

调用`collection.reset()`，不传递任何模型作为参数 将清空整个集合。

###### set
collection.set(models, [options])

__set__ 不存在==>添加，存在 ==> 合并。

会触发 `add`,`remove`,`change`，返回集合中的模型。

可以通过设置`{add:false}`,`{remove:false}`,`{merge:false}`

###### get
collection.get(id)

通过一个`id`，一个`cid`活在这传递一个`model`来获得集合中的模型

	var book = library.get(110);

###### at
collection.at(index)

获取集合中指定索引的模型。

###### push
collection.push(model, [options])

在集合尾部添加一个模型。 选项和`add`相同。

###### pop
collection.pop([options])

删除并返回集合中最后一个模型。选项和`remove`相同

###### unshift
collection.unshift(model, [options])

在集合开始的地方添加一个模型，选项和`add`相同

###### shift
collection.shift([options])

删除并返回集合中第一个模型。选项和`remove`相同

###### slice
collection.slice(begin, end)

返回一个集合的模型的浅拷贝（为什么不是深拷贝）副本

###### length
collection.length

与数组类似，集合拥有`length`属性，返回模型数量

###### comparator
排序算法。不传按默认

###### sort
collection.sort

强制对集合重排序，一般情况下不需要调用该函数。模型被添加时会调用comparator实时排序，要禁用可以传递`{sort: false}` 给 `add`。调用sort会触发集合`sort`事件。

###### pluck
collection.pluck(attribute)

从集合中的每个模型中拉取 attribute。 等价于调用`map`， 并从迭代器中返回单个属性。
	
	var stooges = new Backbone.Collection([
	  {name: "Curly"},
	  {name: "Larry"},
	  {name: "Moe"}
	]);
	
	var names = stooges.pluck("name");
	
	alert(JSON.stringify(names));

###### where
collection.where(attributes)

返回所有匹配所传递 __attributes__的模型数组，对于简单的`filter`比较有用

	var friends = new Backbone.Collection([
		{name: 'athos', job: 'musk'},
		{name: 'jsonz', job: 'musk'},
		{name: 'jhon', job: 'musk'},
		{name: 'js', job: 'codes'},
	])
	
	
	var musketeers = friends.where({job: "Musketeer"});
	
	alert(musketeers.length);

###### findWhere

就像where， 不同的是findWhere直接返回匹配所传递 attributes（属性）的__第一个__模型。

###### url 不理解
collection.url or collection.url()

设置 url 属性（或函数）以指定集合对应的服务器位置。集合内的模型使用 url 构造自身的 URLs。

	var Notes = Backbone.Collection.extend({
	  url: '/notes'
	});
	
	// Or, something more sophisticated:
	
	var Notes = Backbone.Collection.extend({
	  url: function() {
	    return this.document.url() + '/notes';
	  }
	}); 

###### parse
collection.parse(response, options)

每一次调用`fetch`从服务器拉取集合的模型数据，__parse__会被调用。默认只需要简单传入服务端返回的JSON对象。

###### clone
collection.clone()

返回一个模型列表完全相同的集合新实例

###### fetch 不理解
collection.fetch([options])

从服务器拉取集合的默认模型设置 ，成功接收数据后会setting（设置）集合。 options 支持 success 和 error 回调函数，两个回调函数接收 (collection, response, options)作为参数。当模型数据从服务器返回时， 它使用 set来（智能的）合并所获取到的模型， 除非你传递了 {reset: true}， 在这种情况下，集合将（有效地）重置。 可以委托Backbone.sync 在幕后自定义持久性策略 并返回一个jqXHR。 fetch请求的服务器处理器应该返回模型JSON数组。

	Backbone.sync = function(method, model) {
	  alert(method + ": " + model.url);
	};
	
	var accounts = new Backbone.Collection;
	accounts.url = '/accounts';
	
	accounts.fetch();

###### create 不理解
collection.create(attributes, [options])

方便的在集合中创建一个模型的新实例。 相当于使用属性哈希（键值对象）实例化一个模型， 然后将该模型保存到服务器， 创建成功后将模型添加到集合中。 返回这个新模型。 如果客户端验证失败，该模型将不会被保存， 与验证错误。 为了能正常运行，需要在集合中设置 model 属性。 create 方法接收键值对象或者已经存在尚未保存的模型对象作为参数。

创建一个模型将立即触发集合上的"add"事件， 一个"request"的事件作为新的模型被发送到服务器， 还有一个 "sync" ”事件，一旦服务器响应成功创建模型。 如果你想在集合中添加这个模型前等待服务器相应，请传递{wait: true}。

	var Library = Backbone.Collection.extend({
	  model: Book
	});
	
	var nypl = new Library;
	
	var othello = nypl.create({
	  title: "Othello",
	  author: "William Shakespeare"
	});

<h2 id="router">Router</h2>

当应用已经创建了所有的路由，需要调用 Backbone.history.start()，或 Backbone.history.start({pushState: true}) 来确保驱动初始化 URL 的路由。

###### extend
Backbone.Router.extend(properties, [classProperties])

开始创建一个自定义的路由类。当匹配了 URL 片段便执行定义的动作，并可以通过 routes 定义路由动作键值对。 请注意，你要避免在路由定义时使用前导斜杠：

	var Workspace = Backbone.Router.extend({
	
	  routes: {
	    "help":                 "help",    // #help
	    "search/:query":        "search",  // #search/kiwis
	    "search/:query/p:page": "search"   // #search/kiwis/p7
	  },
	
	  help: function() {
	    ...
	  },
	
	  search: function(query, page) {
	    ...
	  }
	
	});

###### routes
router.routes

讲带参数的URLs映射到路由实例的方法上。

路由 `"search/:query/p:page"` 能匹配到 `#search/obama/p2`

路由 `"file/*path"` 可以匹配 `#file/nested/folder/file.txt` 这时传入的动作参数是 `"nested/folder/file.txt"` 

路由 `"docs/:section(/:subsection)"` 可以匹配到 `#docs/faq` 和 `#docs/faq/installing`。
第一种情况 传入 `"faq"`到路由器。第二种传入`"faq"`和`"installing"`到路由对应的动作。

当访问者点击浏览器后退按钮，或者输入 URL ，如果匹配一个路由，此时会触发一个基于动作名称的 event， 其它对象可以监听这个路由并接收到通知。 下面的示例中，用户访问 `#help/uploading` 将从路由中触发 `route:help` 事件。
	
	routes: {
	  "help/:page":         "help",
	  "download/*path":     "download",
	  "folder/:name":       "openFolder",
	  "folder/:name-:mode": "openFolder"
	}
	router.on("route:help", function(page) {
	  ...
	});

###### constructor / initialize
new Router([options])

当创建一个新路由是，你可以直接传入 `routes` 键值对象作为参数。 如果定义该参数， 它们将被传入 `initialize` 构造函数中初始化。

###### route
router.route(route, name, [callback])

为路由对象手动创建路由 `route` 参数可以是 路由字符串或正则表达式。一旦路由匹配，`name`参数会触发`"route:name"`事件。如果`callback`参数省略`router[name]`讲被用来替代。

	initialize: function(options) {
	
	  // Matches #page/10, passing "10"
	  this.route("page/:number", "page", function(number){ ... });
	
	  // Matches /117-a/b/c/open, passing "117-a/b/c" to this.open
	  this.route(/^(.*?)\/open$/, "open");
	
	},
	
	open: function(id) { ... }

###### navigate 不理解
router.navigater(fragment, [options])

每当你达到你的应用的一个点时，你想保存为一个URL，  可以调用navigate以更新的URL。 如果您也想调用路由功能， 设置`trigger`选项设置为`true`。 无需在浏览器的历史记录创建条目来更新URL，  设置 `replace`选项设置为`true`。