/**
 * Created by Jsonz on 2016/3/22.
 */

// TODO 最简单的构造函数
(function(){
    function Car(model, year, miles) {
        this.model = model;
        this.year = year;
        this.miles = miles;
        this.output = function(){
            return this.model + '走了' + this.miles + '公里';
        };
    }

    var jsonz = new Car('张欣欣', 2009, 20000);
    var kim = new Car('金姆', 2010, 5000);

    console.log(jsonz.output());
    console.log(kim.output());
})();

// TODO 虽然可以共用 output Fn。但是这样会增加大量的全局函数
(function(){
    function Car(model, year, miles) {
        this.model = model;
        this.year = year;
        this.miles = miles;
        this.output = formatCar;
    }

    function formatCar() {
        return this.model + ' 走了' + this.miles + '公里';
    }
})();

// TODO 构造函数与原型
(function(){
    function Car(model, year, miles) {
        this.model = model;
        this.year = year;
        this.miles = miles;
    }

    Car.prototype.output = function(){
        return this.model + '走了' + this.miles + '公里';
    };

    var jsonz = new Car('张欣欣', 2009, 20000);
    var kim = new Car('金姆', 2010, 5000);

    console.log(jsonz.output === kim.output);
})();

// TODO 只能用 new 吗
(function(){
    function Car(model, year, miles) {
        this.model = model;
        this.year = year;
        this.miles = miles;
        this.output = function(){
            return this.model + '走了' + this.miles + '公里';
        }
    }

    // 不用new 直接调用
    Car('jsonz', 20, 2000);
    console.log(global.output());

    var o = {};
    Car.call(o, 'dudu', 2010, 2000);
    console.log(o.output());

})();

// TODO 强制使用 new
(function(){
    function Car(model, year, miles) {

        if (!(this instanceof Car)) {
            return new Car(model, year, miles);
        }

        this.model = model;
        this.year = year;
        this.miles = miles;
        this.output = function(){
            return this.model + '走了' + this.miles + '公里';
        }
    }

    var jsonz = new Car('张欣欣', 2009, 20000);
    var kim = Car('金姆', 2010, 5000);

})();

// TODO 原始包装函数
(function(){

    // 使用原始包装函数
    var s = new String('my String');
    var n = new Number(101);
    var b = new Boolean(true);

    // 推荐这种
    var s1 = 'myString';
    var n1 = 101;
    var b1 = true;

    // 包装函数可以设置属性
    s1.name = 'jsonz';
    console.log(s1.name);

    s.name = 'jsonz';
    console.log(s.name);
})();

























