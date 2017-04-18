(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.JsonzEmitter = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
	
function E () {}

E.prototype = {
	on: function(name, cb, ctx) {
		var e = this.e || (this.e = {});
		(e[name] || (e[name] = [])).push({
			fn: cb,
			ctx: ctx
		});
		return this;
	},

	once: function(name, cb, ctx) {
		var self = this;
		function listener() {
			self.off(name, listener);
			cb.apply(ctx, arguments);
		};
		listener._ = cb;
		return this.on(name, listener, ctx);
	},

	emit: function(name) {
		var data = [].slice.call(arguments, 1);
		var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
		var i = 0;
		var len = evtArr.length;
		for (i; i< len; i++) {
			evtArr[i].fn.apply(evtArr[i].ctx, data);
		}
		return this;
	},

	off: function(name, cb) {
		var e = this.e || (this.e = {});
		var evts = e[name];
		var liveEvents = [];
		if (evts && cb) {
			for (var i= 0, len= evts.length; i< len; i++) {
				if (evts[i].fn !== cb && evts[i].fn._ !== cb) {
					liveEvents.push(evts[i]);
				}
			}
		}
		(liveEvents.length)
			? e[name] = liveEvents
			: delete e[name];
		return this;
	}
};

module.exports = E;

},{}]},{},[1])(1)
});