// 工厂模式
function createPerson(name, age, job) {
	var o = {};
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function(){
		console.log(this.name);
	}
	return o;
}

var personA = createPerson('jsonz', 20, 'coding');

// 构造函数模式
function Person(name, age) {
	this.name = name;
	this.age = age;
	this.sayName = function() {
		console.log(this.job);
	}
}

var personB = new Person('jsonz', 20);

Person('window'); // 添加到window

var o = {};
Person.call(o, 'objCall', 20);
o.name; // objCall

function PersonPrototype() {}

PersonPrototype.prototype.name = 'nic';
PersonPrototype.prototype.age = 20;
PersonPrototype.prototype.sayName = function(){
	console.log(this.name);
}

