(function(root, factory) {
    // amd 模块
    if (typeof define === 'function' && define.amd) {
        define(['underscore', 'jquery', 'exports'], function(_, $, exports) {
            root.Backbone = factory(root, exports, _, $);
        })

        // node || CommonJs
    } else if (typeof exports !== 'undefined') {
        var _ = require('underscore');
        factory(root, exports, _);
    } else {
        // global
        root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
    }
})(this, function(root, Backbone, _, $) {

    // 将当前的Backbone赋值给 previousBackbone 防止后面冲突
    var previousBackbone = root.Backbone;

    // 获取array 已经部分方法，后期可以使用
    var array = [],
        push = array.push,
        slice = array.slice,
        splice = array.splice;

    // 当前的backbone版本
    Backbone.VERSION = '1.1.2';

    // 把jQUery || Zepto 赋值给 Backbone.$
    Backbone.$ = $;

    // 冲突机制，不理解
    Backbone.noConfilict = function() {
        root.Backbone = previousBackbone;
        return this;
    }

    // 是否屏蔽掉部分HTTP功能，PUT && PATCH && DELETE
    Backbone.emulateHttp = false;

    // 是否不支持JSON数据传输，默认支持
    Backbone.emulateJSON = false;

    var Events = Backbone.Events = {
            on: function(name, callback, context) {
                // 执行完成 或 没有回调。return this
                if (!eventsApi(this, 'on', name, [callback, context]) || !callback) return this;
                // 创建一个对象 _events
                this._events || (this._events = {});
                // 获取对象上的事件或者创建该数组。 (this._events[name] = []) 会返回一个空数组
                var events = this._events[name] || (this._events[name] = []);
                // 将事件推进 events 数组里，不懂为何。
                events.push({ callback: callback, context: context, ctx: context || this });
                return this;
            },

            // Bind an event to only be triggered a single time.
            // the callback is invoked, it will be removed.
            once: function(name, callback, context) {
                if (!eventsApi(this, 'once', name, [callback, context]) || !callback) return this;
                var self = this;
                var once = _.once(function() {
                    self.off(name, once);
                    callback.apply(this, arguments);
                });
                once._callback = callback;
                return this.on(name, once, context);
            },

            // Remove one or many callbacks. 
            // If `context` is null, removes all callbacks with that function. 
            // If `callback` id null, removes all callbacks for the event. 
            // If `name` is null, remove all bound callbacks for all events.
            off: function(name, callback, context) {
                var retain, ev, events, names, i, l, j, k;
                if (!this._events || || !eventsApi(this, 'off', name, [callback, context])) return this;
                // if arguments is null
                if (!name && !callback && !context) {
                    this._events = void 0;
                    return this;
                }

                // if name is null
                names = name ? [name] : _.keys(this._events);

                for (i = 0, l = names.length; i < l; i++) {
                    name = names[i];
                    // 如果这个事件不为null or undefined
                    if (events = this._events[name]) {
                        // 将这个事件设为[], 并创建一个临时变量用于后面存储事件.
                        this._events[name] = retain = [];
                        // 如果有传入callback 或 context。循环判断是否符合该callback或该context。
                        // 符合就推入到临时变量 retain.
                        if (callback || context) {
                            for (j = 0, k = events.length; j < k; j++) {
                                ev = events[j];
                                if ((callback && callback !== ev.callback && callback !== ev.callback._callback) ||
                                    (context && context !== ev.context)) {
                                    retain.push(ev);
                                }
                            }
                        }

                        // 如果循环后临时事件存储retain没有收集到任何事件， delete this._events[name]
                        if (!retain.length) delete this._events[name];
                    }
                }
                return this;
            },

            // Trigger one or many events, firing all bound callback.
            // Callbacks are passed the same arguments as `trigger` is, apart from the event name
            // unless you're listening on `"all"`, which will cause your callback to 
            // receive the true name of the event as the first arguments)
            trigger: function(name) {
                // 如果这个对象没有事件，直接返回
                if (!this._events) return this;
                var args = slice.call(arguments, 1);
                if (!eventsApi(this, 'trigger', name, args)) return;
                var events = this._events[name];
                var allEvents = this._events.all;
                if (events) triggerEvents(events, args);
                if (allEVents) triggerEvents(allEvents, arguments);
                return this;
            },

            stopListening: function(obj, name, callback){
            	var listeningTo = this._listeningTo;
            	if (!listeningTo) return this;
            	var remove = !name && !callback; // 有 name && callback 的情况下
            	if (!callback && typeof name === 'object') callback = this;
            	if (obj) (listeningTo = {})[obj._listenId] = obj;
            	for (var id in listeningTo) {
            		obj = listeningTo[id];
            		obj.off(name, callback, this);
            		if (remove || _.isEmpty(obj._events)) delete this;
            	}
            	return this;
            }
        },

        //Regular expression used to split event strings.
        var eventSplitter = /\s+/;

    // Implement fancy features of the Events API such as  multiple event
    //names `"change blur"` and jQUery-stype event maps `{change: action}`
    // in terms of the existing API.
    // 		eventsApi(this, 'on', name, [callback,context])
    var eventsApi = function(obj, action, name, rest) {
        if (!name) return true;

        // Handle event maps
        if (typeof name === 'object') {
            for (var key in name) {
                obj[action].apply(obj, [key, name[key]].concat(rest));
            }
            return false;
        }

        // Handle space separated event names.
        if (eventSplitter.test(name)) {
            var names = name.split(eventSplitter);
            for (var i = 0, l = names.length; i < l; i++) {
                obj[action].apply(obj, [names[i]].concat(rest));
            }
            return false;
        }

        return true;
    };

    var triggerEvents = function(events, args) {
        var ev, i = -1,
            l = events.length,
            a1 = args[0],
            a2 = args[1],
            a3 = args[2];
        switch (args.length) {
            case 0:
                while (++i < l)(ev = events[i]).callback.call(ev.ctx);
                return;
            case 1:
                while (++i < l)(ev = events[i]).callback.call(ev.ctx, a1);
                return;
            case 2:
                while (++i < l)(ev = events[i]).callback.call(ev.ctx, a1, a2);
                return;
            case 3:
                while (++i < l)(ev = events[i]).callback.call(ev.ctx, a1, a2, a3);
                return;
            default:
                while (++i < l)(ev = events[i]).callback.apply(ev.ctx, args);
                return;
        }
    };


});
