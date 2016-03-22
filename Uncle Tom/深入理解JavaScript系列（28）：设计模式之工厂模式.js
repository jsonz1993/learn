/**
 * Created by Jsonz on 2016/3/22.
 */

// TODO 对之前的构造函数模式代码改进
(function(){

    var Car = (function(){
        var Car = function(model, year, miles){
            this.model = model;
            this.year = year;
            this.miles = miles;
        };

        return function(model, year, miles) {
            return new Car(model, year, miles);
        }
    })();

    var jsonz = new Car('jsonz', 2008, 2000);
    var dudu = new Car('dudu', 2000, 5000);
})();

// TODO 工厂模式
(function(){
    var productManager = {};

    productManager.createProductA = function(){
        console.log('ProductA');
    };

    productManager.createProductB = function(){
        console.log('ProductB');
    };

    productManager.factory = function(type) {
        return new productManager[type];
    };

    productManager.factory('createProductA');
})();

// TODO 在网页插入一些元素函数 要撸一遍
(function(){

    var page = page || {};
    page.dom = page.dom || {};

    // 处理文本
    page.dom.Text = function() {
        this.insert = function (where) {
            var txt = document.createTextNode(this.url);
            where.appendChild(txt);
        }
    };

    // 处理连接
    page.dom.Link = function(){
        this.insert = function (where) {
            var link = document.createElement('a');
            link.href = this.url;
            link.appendChild(document.createTextNode(this.url));
            where.appendChild(link);
        }
    };

    // 处理图片
    page.dom.Image = function(){
        this.insert = function (where) {
            var img = document.createElement('img');
            img.src = this.url;
            where.appendChild(img);
        }
    };

    page.dom.factory = function(type) {
        return new page.dom[type];
    };

    var o = page.dom.factory('Link');
    o.url = 'http://www.baidu.com';
    o.insert(document.body);

    var img = page.dom.factory('img');
    img.url = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
    img.insert(document.body);

    var img2 = page.dom.factory('img');
    img2.url = 'https://ss3.bdstatic.com/iPoZeXSm1A5BphGlnYG/icon/weather/aladdin/jpg/a7.jpg';
    img2.insert(document.body);

})();



















