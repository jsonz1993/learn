## Backbone.Events

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

## Backbone.Model 模型

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

###### url 

[http://www.css88.com/doc/backbone/#Model-url](http://www.css88.com/doc/backbone/#Model-url)

model.url()

返回模型资源在服务器上位置的相对URL。