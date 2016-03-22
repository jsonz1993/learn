##汤姆大叔的博客。JS部分

#####感觉README.md刚学会，一直在滥用╭(′▽`)╯

[教程链接](http://www.cnblogs.com/TomXu/archive/2011/12/15/2288411.html) 深入理解JavaScript系列

---
很多没有真正的理解，本来以为一个星期可以看完所有的50篇文。


现在觉得一天能理解1-2篇就不错了。

---

* __[深入理解JavaScript系列（2）：揭秘命名函数表达式](http://www.cnblogs.com/TomXu/archive/2011/12/29/2290308.html)__

* __[深入理解JavaScript系列（3）：全面解析Module模式](http://www.cnblogs.com/TomXu/archive/2011/12/30/2288372.html)__
	* 创建的时候用到一个new ？？？
	* 一些不理解的东西用？？？ 写在里面了。
* __[深入理解JavaScript系列（4）：立即调用的函数表达式](http://www.cnblogs.com/TomXu/archive/2011/12/31/2289423.html)__
	* 不大懂大叔想表达啥，写的有点简洁或者说简单，看着感觉这课收获不是很大 
* __[深入理解JavaScript系列（5）：强大的原型和原型链](http://http://www.cnblogs.com/TomXu/archive/2012/01/05/2305453.html)__
	* 或许是之前对原型链理解比较透彻，看着觉得说压力不是很大。
	* 有点疑惑的地方可能就是**constructor** 指向自己这一点
* __[深入理解JavaScript系列（6）：S.O.L.I.D五大原则之单一职责SRP](http://www.cnblogs.com/TomXu/archive/2012/01/06/2305513.html)__
	* 订阅者模式 完全看愣比了
	  
* **五大原则超出能力范围太多了，暂时放弃，接下来根据实际跳过某些章节，回过头再来看。**
* __[深入理解JavaScript系列（9）：根本没有“JSON对象”这回事！](http://www.cnblogs.com/TomXu/archive/2012/01/11/2311956.html)__
	* 吃饭无聊的时候可以看一下 平时没必要看。
* __[深入理解JavaScript系列（10）：JavaScript核心（晋级高手必读篇）](http://www.cnblogs.com/TomXu/archive/2012/01/12/2308594.html)__
	* 看标题就感觉又是看不下去的
	* 感觉讲的不错，但是好像现在的程度用不上，先补着先   
	* 看完了，有一个点不大明白，其他还好。讲的有点浅 没有深入讲
* __[深入理解JavaScript系列（11）：执行上下文（Execution Contexts）](http://www.cnblogs.com/TomXu/archive/2012/01/13/2308101.html)__
	* 理论较多 干货较少或者我还没到那个层次 感觉没什么好看的
* __[深入理解JavaScript系列（12）：变量对象（Variable Object）](http://www.cnblogs.com/TomXu/archive/2012/01/16/2309728.html)__
	* 感觉写的很精彩
	* 很多以前没想到的东西都有，评论区也有个干货 a 和 window.a 调用的差别。虽然在现在的chrome版本差别不会很大。但是查找的方式不同，一个是global.a 一个是 global.window.a 虽然在进入全局上下文的时候 global.window = global。但是跨了一层之后还是会有所延迟
* __[深入理解JavaScript系列（13）：This? Yes,this!](http://ww.cnblogs.com/TomXu/archive/2012/01/17/2310479.html)__
	* 和想象中不同，以为讲的是this的各种情况。但看起来更像是更底层的东西
	* 看到要吐血。不懂暂搁，感觉以后会不会突然的跑去看C#
* __[深入理解JavaScript系列（14）：作用域链(Scope Chain)](http://www.cnblogs.com/TomXu/archive/2012/01/18/2312463.html)__
	* 写的好棒，特别是with那一部分。
	* 感觉写的循序渐进 一层一层的解释的很透彻，以前都是知道是这样，但不知道为什么这样 
* __[深入理解JavaScript系列（15）：函数（Functions）](http://www.cnblogs.com/TomXu/archive/2012/01/30/2326372.html)__
	* 看着有点乱。很多都用不上
* __[深入理解JavaScript系列（16）：闭包（Closures）](http://www.cnblogs.com/TomXu/archive/2012/01/31/2330252.html)__
	* 理解之后总有种恍然大悟的感觉 ①
	* 用call 实现继承
* __[深入理解JavaScript系列（17）：面向对象编程之概论](http://www.cnblogs.com/TomXu/archive/2012/02/03/2330295.html)__
	* ① 原型理解 so easy;
	* ② 不懂的装饰着模式
* __[深入理解JavaScript系列（18）：面向对象编程之ECMAScript实现（推荐）](http://www.cnblogs.com/TomXu/archive/2012/02/06/2330609.html)__
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
* __[深入理解JavaScript系列（19）：求值策略(Evaluation strategy)](http://www.cnblogs.com/TomXu/archive/2012/02/08/2341439.html)__
	* 没什么干货
* __[你真懂JavaScript吗？(20)](http://www.cnblogs.com/TomXu/archive/2012/02/10/2342098.html)__
	* ① 变量对象问题 __答对__ 
	* ② VO 与函数表达式__答对__
	* ③ 同上 __答对__
	* ④ 形参实参 知道形参实参其实是不同内存就可以答对 __答对__
	* ⑤ call 和 this 的用法 __答对__
	* __加分题__
	* ① _Get_ 找出数字数组中最大的元素（使用Match.max函数） 用 Math.max.apply()
	* 
	* ② _Get_ 转化一个数字数组为function数组（每个function都弹出相应的数字）考点 闭包for循环 
	* 
	* ③ _做不出_ 给object数组进行排序（排序条件是每个元素对象的属性个数）

		**Object.getOwnPropertyNames()**可以获取到某个属性的子属性个数.
	* ④ 利用JavaScript打印出Fibonacci数（不使用全局变量）!才知道算法大神


			function fibonacci(n) {
		        if (n < 2) {
		            return 1;
		        }
		
		        return fibonacci(n - 2) + fibonacci(n - 1);
		    }
		
		    fibonacci(1);
	* ⑤ 实现如下语法的功能：var a = (5).plus(3).minus(6); //2 考点 prototype
		
			Number.prototype.plus = function(num){
		        return this.valueOf() + num;
		    };
		
		    Number.prototype.minus = function(num) {
		        return this.valueOf() - num;
		    };
		
		    (5).plus(3).minus(6);
	
	* ⑥ 实现如下语法的功能：var a = add(2)(3)(4); //9 return自己，重写 toString/valueOf
	
			function add(x) {
	
		        var sum = x;
		        var temp = function(y) {
		            sum += y;
		            return temp;
		        };
		
		        temp.toString = function(){
		            return sum;
		        };
		
		        return temp;
		    }
	太美妙了，6道题我只会3道。
* [深入理解JavaScript系列（21）：S.O.L.I.D五大原则之接口隔离原则ISP](http://www.cnblogs.com/TomXu/archive/2012/02/14/2330137.html)
 
	`又是跳过` 
* [深入理解JavaScript系列（22）：S.O.L.I.D五大原则之依赖倒置原则DIP](http://www.cnblogs.com/TomXu/archive/2012/02/15/2330143.html)

	`再次跳过`
* [深入理解JavaScript系列（23）：JavaScript与DOM（上）——也适用于新手](http://www.cnblogs.com/TomXu/archive/2012/02/16/2351331.html)
	* 太基础了 没啥好记
* [深入理解JavaScript系列（24）：JavaScript与DOM（下）](http://www.cnblogs.com/TomXu/archive/2012/02/17/2351938.html)
	* Event 对象
	* Event 事件 
	* 兼容IE
* [深入理解JavaScript系列（25）：设计模式之单例模式](http://www.cnblogs.com/TomXu/archive/2012/02/20/2352817.html)
	* 适用于__一个对象和其他系统进行交互,有点类似于一个小组的小组长，在一段时间内只有一个小组长，有小组长来指定组员的工作，分配和协调和组员的工作__
	 
	* 实现方法一
			
			在闭包里实现，然后判断是否存在该实例，存在就把原来的retuen，不存在就new 一个再返回

	* 实现方法二
			
			在开头判断类型是否为object 是就返回，不是就新建一个，最后把instance 指向自己

	* 实现方法三
			
			执行代码后，重写掉该构造函数，写成返回原来new 出来的对象

	* 实现方法四
		
			愣比
			包含了原型链
			先重构了函数，再实例，重设构造函数指针等。再返回缓存实例

	* 实现方法五

			没什么新意。在外面设置一个变量，再用自执行完成前面所做的事情。

	* 其实平时的字面量也算是单例的一种
* [深入理解JavaScript系列（26）：设计模式之构造函数模式](http://www.cnblogs.com/TomXu/archive/2011/12/15/2288411.html)
	* __创建属于自己的对象，有点像java的类__
 
	* 小贴士 强制使用new
	
			if (!(this instanceof Car)) {
	            return new Car(model, year, miles);
	        }
[深入理解JavaScript系列（27）：设计模式之建造者模式](http://www.cnblogs.com/TomXu/archive/2012/02/22/2353341.html)

	* __在软件系统中，有时候面临着“一个复杂对象”的创建工作，其通常由各个部分的子对象用一定的算法构成；由于需求的变化，这个复杂对象的各个部分经常面临着剧烈的变化，但是将它们组合在一起的算法确相对稳定。如何应对这种变化？如何提供一种“封装机制”来隔离出“复杂对象的各个部分”的变化，从而保持系统中的“稳定构建算法”不随着需求改变而改变？这就是要说的建造者模式。__
	
	* __建造者模式可以将一个复杂对象的构建与其表示相分离，使得同样的构建过程可以创建不同的表示。也就是说如果我们用了建造者模式，那么用户就需要指定需要建造的类型就可以得到它们，而具体建造的过程和细节就不需要知道了。__ 
	
	* 百度之后理解了一下，应该就是平时写的回调。

 