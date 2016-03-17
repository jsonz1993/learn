##汤姆大叔的博客。JS部分

#####感觉README.md刚学会，一直在滥用╭(′▽`)╯

[教程链接](http://www.cnblogs.com/TomXu/archive/2011/12/15/2288411.html) 深入理解JavaScript系列

---
很多没有真正的理解，本来以为一个星期可以看完所有的50篇文。


现在觉得一天能理解1-2篇就不错了。

---

* [深入理解JavaScript系列（2）：揭秘命名函数表达式](http://www.cnblogs.com/TomXu/archive/2011/12/29/2290308.html)

* [深入理解JavaScript系列（3）：全面解析Module模式](http://www.cnblogs.com/TomXu/archive/2011/12/30/2288372.html)
	* 创建的时候用到一个new ？？？
	* 一些不理解的东西用？？？ 写在里面了。
* [深入理解JavaScript系列（4）：立即调用的函数表达式](http://www.cnblogs.com/TomXu/archive/2011/12/31/2289423.html)
	* 不大懂大叔想表达啥，写的有点简洁或者说简单，看着感觉这课收获不是很大 
* [深入理解JavaScript系列（5）：强大的原型和原型链](http://http://www.cnblogs.com/TomXu/archive/2012/01/05/2305453.html)
	* 或许是之前对原型链理解比较透彻，看着觉得说压力不是很大。
	* 有点疑惑的地方可能就是**constructor** 指向自己这一点
* [深入理解JavaScript系列（6）：S.O.L.I.D五大原则之单一职责SRP](http://www.cnblogs.com/TomXu/archive/2012/01/06/2305513.html)
	* 订阅者模式 完全看愣比了
	  
* **五大原则超出能力范围太多了，暂时放弃，接下来根据实际跳过某些章节，回过头再来看。**
* [深入理解JavaScript系列（9）：根本没有“JSON对象”这回事！](http://www.cnblogs.com/TomXu/archive/2012/01/11/2311956.html)
	* 吃饭无聊的时候可以看一下 平时没必要看。
* [深入理解JavaScript系列（10）：JavaScript核心（晋级高手必读篇）](http://www.cnblogs.com/TomXu/archive/2012/01/12/2308594.html)
	* 看标题就感觉又是看不下去的
	* 感觉讲的不错，但是好像现在的程度用不上，先补着先   
	* 看完了，有一个点不大明白，其他还好。讲的有点浅 没有深入讲
* [深入理解JavaScript系列（11）：执行上下文（Execution Contexts）](http://www.cnblogs.com/TomXu/archive/2012/01/13/2308101.html)
	* 理论较多 干货较少或者我还没到那个层次 感觉没什么好看的
* [深入理解JavaScript系列（12）：变量对象（Variable Object）](http://www.cnblogs.com/TomXu/archive/2012/01/16/2309728.html)
	* 感觉写的很精彩
	* 很多以前没想到的东西都有，评论区也有个干货 a 和 window.a 调用的差别。虽然在现在的chrome版本差别不会很大。但是查找的方式不同，一个是global.a 一个是 global.window.a 虽然在进入全局上下文的时候 global.window = global。但是跨了一层之后还是会有所延迟
* [深入理解JavaScript系列（13）：This? Yes,this!](http://www.cnblogs.com/TomXu/archive/2012/01/17/2310479.html)
	* 和想象中不同，以为讲的是this的各种情况。但看起来更像是更底层的东西
	* 看到要吐血。不懂暂搁，感觉以后会不会突然的跑去看C#
* [深入理解JavaScript系列（14）：作用域链(Scope Chain)](http://www.cnblogs.com/TomXu/archive/2012/01/18/2312463.html)
	* 写的好棒，特别是with那一部分。
	* 感觉写的循序渐进 一层一层的解释的很透彻，以前都是知道是这样，但不知道为什么这样 
* [深入理解JavaScript系列（15）：函数（Functions）](http://www.cnblogs.com/TomXu/archive/2012/01/30/2326372.html)
	* 看着有点乱。很多都用不上
* [深入理解JavaScript系列（16）：闭包（Closures）](http://www.cnblogs.com/TomXu/archive/2012/01/31/2330252.html)
	* 理解之后总有种恍然大悟的感觉 ①
	* 用call 实现继承
* [深入理解JavaScript系列（17）：面向对象编程之概论](http://www.cnblogs.com/TomXu/archive/2012/02/03/2330295.html)
	* ① 原型理解 so easy;
	* ② 不懂的装饰着模式
* [深入理解JavaScript系列（18）：面向对象编程之ECMAScript实现（推荐）](http://www.cnblogs.com/TomXu/archive/2012/02/06/2330609.html)
	*  Object.freeze(o) 冻结对象 Object.isFreeze(o) 获取冻结状态
	*  Object.defineProperty(o)定义属性 
		  **如value，writable（只读），configurable（不可配置）等**
	* Object.preventExtensions(o) **防止扩展** 既可以修改也可以删除但不可以添加
	* **对象转换** valueOf() toString()
	
			valueOf()	
			对象和日期对象都会返回this。
			既var a = {x : 10},a.valueOf() === a; 
			new Date().getTime() === new Date().valueOf();

			运算符操作优先调用 valueOf()
			字符串运算优先调用 toString()
	* 类型转换 ？？？ var a = '10'; var b = +a; // 10,number
	 
			[[Prototype]] 对象的原型
     		[[Class]] 字符串对象的表示Array, Function 等      Object.prototype.toString()
     		[[Get]] 获取属性值的方法
     		[[Put]] 设置属性值的方法
     		[[CanPut]] 检查属性是否可写
     		[[HasProperty]] 检查对象是否拥有该属性
     		[[Delete]] 从对象删除该属性
     		[[DefaultValue]] 返回对象对应的原始值（会调用valueOf方法）

			var getClass = Object.prototype.toString;
    		getClass.call({}); // [object Object]
   			getClass.call([]); // [object Array]
   			getClass.call(1); // [object Number]
					
	* **构造函数**
	
			function A(){};A.prototype.x = 10; var a = new A(); a.x; //10
			var __newPrototype = { constructor : A, x : 0, y : 20};
			A.prototype = __newPrototype; var b = new A(); b.y; // 20;  a.y; // undefined;  a.x; // 10
			a.prototype = __newPrototype; a.x; // 10 还是旧的原型
			a.__proto__ = __newPrototype; a.x; // 20 更新到新的原型
	* 读写属性
		* __[[Get]] 和 [[Put]] 伪代码写的太好了__ 如果以后有学C#看 V8这些应该懂的更多一点
		* 理解了伪代码的话，原型那块就可以理解了。
	* 原型
		* 大叔很喜欢写自定义属性如 superproto 猜不透= =以为是js的属性
		* ③好难理解的语法糖和继承
		* ④ Object.create ES 标准化的继承 
		* 用的时候先判断，如果存在就用那个，不存在就封装一个类似的函数 
	* **刷完好累**  
* [深入理解JavaScript系列（19）：求值策略(Evaluation strategy)](http://www.cnblogs.com/TomXu/archive/2012/02/08/2341439.html)
	* 没什么干货
* [你真懂JavaScript吗？(20)](http://www.cnblogs.com/TomXu/archive/2012/02/10/2342098.html)
	* 



