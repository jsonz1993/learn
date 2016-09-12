// 反例 变量太多
function checkName() {}
function checkEmail() {}
function checkPassword() {}

// 对象收编变量 可减少变量
var CheckObject = {
	checkName: function(){},
	checkEmail: function(){},
	checkPassword: function(){}
}

// 对象的另一种形式 一般不用，因为这样其实看起来更麻烦，而且又是共用一套代码，还不如对象收编
var CheckObject = function(){}
CheckObject.checkName = function(){};
CheckObject.checkEmail = function(){};
CheckObject.checkPassword = function(){};

// 类  每个人都会有一套专属自己的方法，但所有对象都有自己的一套方法，有时候会很奢侈
var CheckObject = function(){
	this.checkName = function(){};
	this.checkEmail = function(){};
	this.checkPassword = function(){};
}
var a = new CheckObject();
a.checkEmail();

// 一个检测类
var CheckObject = function(){};
CheckObject.prototype.checkName = function(){};
CheckObject.prototype.checkEmail = function(){};
CheckObject.prototype.checkPassword = function(){};

// 也可以用原型对象，不过要修改constructor值，指向自己
var CheckObject = function(){};
CheckObject.prototype = {
	checkName: function(){},
	checkEmail: function(){},
	checkPassword: function(){}
}

// 链式调用
var CheckObject = {
	checkName: function(){
		return this;
	},
	checkEmail: function(){
		return this;
	},
	checkPassword: function(){
		return this;
	}
}
CheckObject.checkName().checkEmail().checkPassword();

// 原型链式调用
var CheckObject = function(){}
CheckObject.prototype = {
	checkName: function(){
		return this;
	},
	checkEmail: function(){
		return this;
	},
	checkPassword: function(){
		return this;
	}
};
var a = new CheckObject();
a.checkName().checkEmail().checkPassword();


// 添加方法函数
Function.prototype.addMethod = function(name, fn){ this[name] = fn;return this; }
var methods = function(){};
methods.addMethod('checkEmail', function(){}).addMethod('checkPassword', function(){}).addMethod('checkName', function(){});

// 换一种使用方法
Function.prototype.addMethod = function(name, fn){
	this.prototype[name] = fn;
	return this;
}
var Methods = function(){};
Methods.addMethod('checkEmail', function(){}).addMethod('checkPassword', function(){}).addMethod('checkName', function(){});

// 正假对象一节中如何实现方法的链式调用呢？
// 定义一个可以为函数添加多个方法的addMethod方法
// 定义一个为函数原型添加方法又可以为其自身添加方法的addMethod方法

Function.prototype.addMoreMethod = function(obj){
	for (var i in obj) {
		this.prototype[i] = obj[i];
	}
	return this;
};

var TryFn = function(){};
TryFn.addMoreMethod({
	a: function(){
		console.log(1);
		return this;
	},
	b: function(){
		console.log(2);
		return this;
	}
}).addMoreMethod({
	c: function(){
		console.log(3);
		return this;
	}
});
