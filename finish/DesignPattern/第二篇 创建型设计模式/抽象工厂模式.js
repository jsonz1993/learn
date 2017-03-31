/**
 * Created by Administrator on 2016/9/12.
 */
/**
 * 抽象工厂模式
 *
 * 定义一个方法，如果没有被重写，直接调用则会抛出错误
 *
 * 创建模式中唯一一种抽象化创建模式。
 */

var Car = function(){};

// 实现了一个方法，如果没有重写而是直接调用就会报错
Car.prototype = {
    getPrice: function(){
        return new Error('抽象方法不能调用');
    },
    getSpeed: function(){
        return new Error('抽象方法不能调用');
    }
};

// 幽灵工厂-- 抽象工厂模式
var VehicleFactory = function(subType, superType) {
    if (typeof VehicleFactory[superType] == 'function') {
        // 缓冲类
        function F(){}
        // 继承父类属性和方法
        F.prototype = new VehicleFactory[superType]();
        // 子类原型继承'父类'
        subType.prototype = new F();
        // 将子类constructor修正
        subType.constructor = subType;
    } else {
        throw new Error('未创建该抽象类');
    }
};

// 小汽车抽象类
VehicleFactory.Car = function (){
    this.type = 'car';
};
VehicleFactory.Car.prototype = {
    getPrice: function(){
        return new Error('抽象方法不能调用');
    },
    getSpeed: function(){
        return new Error('抽象方法不能调用');
    }
};

// 公交车抽象类
VehicleFactory.Bus = function(){
    this.type = 'bus';
};
VehicleFactory.Bus.prototype = {
    getPrice: function(){
        return new Error('抽象方法不能调用');
    },
    getPassengerNum: function(){
        return new Error('抽象方法不能调用');
    }
};

// 货车抽象类
VehicleFactory.Truck = function(){
    this.type = 'truck';
};
VehicleFactory.Truck.prototype = {
    getPrice: function(){
        return new Error('抽象方法不能调用');
    },
    getTrainload: function(){
        return new Error('抽象方法不能被调用');
    }
};

// 宝马汽车子类
var BMW = function(price, speed) {
    this.price =price;
    this.speed = speed;
};
// 抽象工厂实现对Car抽象类的继承
VehicleFactory(BMW, 'Car');
BMW.prototype.getPrice = function(){
    return this.price;
};
BMW.prototype.getSpeed = function(){
    return this.speed;
};

// 奔驰汽车子类
var BenzTruck = function(price, trainload) {
    this.price = price;
    this.trainload = trainload;
};
// 抽象工厂实现对Truck抽象类的继承
VehicleFactory(BenzTruck, 'Truck');
BenzTruck.prototype.getPrice = function(){
    return this.price;
};
BenzTruck.prototype.getTrainload = function(){
    return this.trainload;
};

var truck = new BenzTruck(10000, 100);
console.log(truck.type);
console.log(truck.getPrice());
