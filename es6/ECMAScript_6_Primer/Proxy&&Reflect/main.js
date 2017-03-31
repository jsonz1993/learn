// Proxy 对目标对象架设了一层拦截，外界访问该对象，都会通过这层拦截。
var obj = new Proxy({}, {
	get: function(target, key ,receiver) {
		console.log(`getting ${key}!`);
		return Reflect.get(target, key, receiver);
	},
	set: function(target, key, value, receiver) {
		console.log(`setting ${key}!`);
		return Reflect.set(target, key, value, receiver);
	}
});
obj.count = 1;
// setting count!
++obj.count;
// getting count!
// setting count!
// 2

var proxy = new Proxy({},{
	get: function(target, handler) {
		return 35;
	}
});
proxy.time; // 35
proxy.name; // 35
proxy.title; // 35
// 略过 http://es6.ruanyifeng.com/#docs/proxy
