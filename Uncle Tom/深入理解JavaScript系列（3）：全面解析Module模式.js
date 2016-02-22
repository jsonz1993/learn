/**
 * Created by Jsonz on 2016/2/22.
 * 教程地址 http://www.cnblogs.com/TomXu/archive/2011/12/30/2288372.html
 * Module 模式的基本特征：
 * 1.模块化，可重用
 * 2.封装了变量和function,和全局的namaspace不接触，松耦合
 * 只暴漏可用public的方法，其他私有方法全部隐藏
 */

//基本用法

var Calculator = function(eq) {
    // 这里可以声明私有成员

    var eqCtl = document.getElementById(eq);

    return {
        // 暴漏公有成员
        add : function(x, y) {
            var val = x + y;
            eqCtl.innerHTML = val;
        }
    }
};

// 调用上述方法  大家可能看到了，每次用的时候都要new一下，也就是说每个实例在内存里都是一份copy，如果你不需要传参数或者没有一些特殊苛刻的要求的话，我们可以在最后一个}后面加上一个括号，来达到自执行的目的，这样该实例在内存中只会存在一份copy，不过在展示他的优点之前，我们还是先来看看这个模式的基本使用方法吧。  ??? 不解这里为什么要用到一个new ;
var calculator = new Calculator('try');
calculator.add(2,2);


//闭包引用全局变量
//代码声明了一个全局变量blogModule，并且带有2个可访问的属性：blogModule.AddTopic和blogModule.Name，除此之外，其它代码都在匿名函数的闭包里保持着私有状态
var blogModule = (function(){
    var my = {},
        privateName = '博客园';

    function privateAddToPic(data) {
        //这里是内部处理代码
    }

    my.Name = privateName;
    my.AddTopic = function(data){
        privateAddToPic(data);
    };

    return my;
}());

// 发大招

// 扩展   Module模式的一个限制就是所有的代码都要写在一个文件，但是在一些大型项目里，将一个功能分离成多个文件是非常重要的，因为可以多人合作易于开发。这时候我们可以把Module自身传进去，再在里面添加其他东西最后返回出来 这里可以用var 也可以省略

blogModule = (function(self){
    self.AddPhoto = function () {
        // 添加内部代码
        console.log('1');
    };

    return self;
}(blogModule));


// 松耦合扩展
// 上述代码，只有在blogModule声明了或引用了之后调用才能正常运行。可以用 blogModule || {} 来解决。

var blogModule = (function(self){

    self.addOther = function(){
        //其他代码
        console.log('2');
    };

    self.AddPhoto = function() {
        console.log(2)
    };

    return self;
}(blogModule || {}));

//紧耦合扩展
//Tom大叔： 松耦合扩展很牛叉了，但是可能也会存在一些限制，比如你没办法重写你的一些属性或者函数，也不能在初始化的时候就是用Module的属性。紧耦合扩展限制了加载顺序，但是提供了我们重载的机会 ？？？ 不懂。

var blogModule = (function(self){
    var oldAddPhotoMethod = self.AddPhoto;

    self.AddPhoto = function () {
        // 重载方法，依然可以通过 oldAddPhotoMethod() 调用旧的方法 漂亮
    };

    return self;

}(blogModule));

//克隆与继承
//该方法如果修改旧module的话，会影响到新的blogModule。
var blogModule = (function(old){
    var self = {},
        key;

    for (key in old) {
        if (old.hasOwnProperty(key)) {
            self[key] = old[key];
        }
    }

    var oldAddPhotoMethod = old.AddPhoto;
    self.AddPhoto = function(){
        // 克隆之后，进行了重写，当然也可以通过调用 oldAddPhotoMethod 来调用旧AddPhoto
    };

    return self;

}(blogModule));

//跨文件共享私有对象
//任何文件都可以对他们的局部变量_private设属性，并且设置对其他的文件也立即生效。一旦这个模块加载结束，应用会调用 blogModule._seal()"上锁"，这会阻止外部接入内部的_private。如果这个模块需要再次增生，应用的生命周期内，任何文件都可以调用_unseal() ”开锁”，然后再加载新文件。加载后再次调用 _seal()”上锁”。
// ??? 看不懂
var blogModule = (function(self){
    var _private = self._private = self._private || {},

        _seal = self._seal = self._seal || function() {
                delete self._private;
                delete self._seal;
                delete self._unseal;
            },

        _unseal = self._unseal = self._unseal || function() {
                self._private = _private;
                self._seal = _seal;
                self._unseal = _unseal;
            };

    self.try1 = function () {
        console.log(self._private);
    };

    return self;
}(blogModule || {}));


// 子模块
// 子模块可以用上述所有方法

blogModule.CommentSubModule = (function(){
    var my = {};


    var my;
}());


/**
 * 作者的话
 * 上面的大部分方式都可以互相组合使用的，一般来说如果要设计系统，可能会用到松耦合扩展，私有状态和子模块这样的方式。
 * 另外，我这里没有提到性能问题，但我认为Module模式效率高，代码少，加载速度快。使用松耦合扩展允许并行加载，这更可以提升下载速度。不过初始化时间可能要慢一些，但是为了使用好的模式，这是值得的。
 */



































