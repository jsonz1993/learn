/**
 * Created by Administrator on 2016/9/12.
 */

/**
 * 有时候用简单工厂模式，添加一个类就要修改多一次工厂。不方便
 *
 * 安全模式，防止调用的时候没有写new 做个判断 this instanceof Demo
 *
 */
try {
    // 广告展示
// Java 绿色字体
    var Java = function (content){
        this.content = content;
        (function (content){
            var div = document.createElement('div');
            div.innerHTML = content;
            div.style.color = 'green';
            document.getElementById('container').appendChild(div);
        })(content);
    };
// 创建PHP，黄色字体 红色背景
    var Php = function (content){
        this.context = content;
        (function (content){
            var div = document.createElement('div');
            div.innerHTML = content;
            div.style.color = 'yellow';
            div.style.background = 'red';
            document.getElementById('container').appendChild(div);
        })(content);
    };

    var JavaScript = function (content){
        this.content = content;
        (function (content){
            var div = document.createElement('div');
            div.innerHTML = content;
            div.style.background = 'pink';
            document.getElementById('container').appendChild(div);
        })(content);
    };

// 如果这时候用简单工厂模式，以后添加一个学科，就要修改一次简单工厂模式
    function JobFactory(type, content){
        switch (type) {
            case 'java':
                return new Java(content);
            case 'php':
                return new Php(content);
            case 'javascript':
                return new JavaScript(content);
        }
    }

    JobFactory('javascript', 'JavaScript 哪家强');
} catch (e) {
}

// 安全模式类
var Demo = function (){
};
Demo.prototype = {
    show: function (){
        console.log('success');
    }
};
var d = new Demo();
d.show();
var d = Demo();
d.show();
// 改进
var Demo = function (){
    if (!(this instanceof Demo)) {
        return new Demo();
    }
};

// 安全的工厂方法
var Factory = function (type, content){
    if (this instanceof Factory) {
        return new this[type](content);
    } else {
        return new Factory(type, content);
    }
};
Factory.prototype = {
    Java: function (content){
        //...
    },
    JavaScript: function (content){
        //...
    },
    Php: function (content){
        //...
    }
};

var data = [
    {type: 'Javascript', content: 'Javascript 哪家强'},
    {type: 'Java', content: 'Java 哪家强'}
];
for (var i = 0; i < data.length; i++) {
    Factory(data[i].type, data[i].content);
}