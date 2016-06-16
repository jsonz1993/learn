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