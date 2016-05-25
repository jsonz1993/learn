/**
 * Created by Jsonz on 2016/2/29.
 *
 *  已经觉得S.O.L.I.D五大原则超出我的能力范围太多。暂时放弃。
 *
 * 在面向对象编程里，继承提供了一个机制让子类和共享基类的代码
 * 这是通过在基类型里封装通用的数据和行为来实现的，然后已经及类型来声明更详细的子类型
 * 为了应用里氏替换原则，继承子类型需要在语义上等价于基类型里的期望行为。
 */


function Vehicle(my) {
    my = my || {};
    my.speed = 0;
    my.running = false;

    this.speed = function(){
        return my.speed;
    };

    this.start = function(){
        my.running = true;
    };

    this.stop = function() {
        my.running = false;
    };

    this.accelerate = function(){
        my.speed++;
    };

    this.decelerate = function(){
        my.speed--;
    };

    this.state = function(){
        if (!my.running) {
            return 'parked';
        } else if (my.running && my.speed) {
            return 'moving';
        } else if (my.running) {
            return 'idle';
        }
    };
}

// 我们来想想如果当前函数当前正运行在服务客户的产品环境上
// 如果现在需要添加一个新的构造函数来实现加快移动的vehicle。思考以后，我们写出了如下代码：

function FastVehicle(my) {
    my = my || {};

    var that = new Vehicle(my);
    that.accelerate = function(){
        my.speed += 3;
    };
    return that;
}

// 在浏览器的控制台我们都测试了，FastVehicle的速度增快了3倍，而且继承他的方法也是按照我们的预期工作。
// 此后，我们开始部署这个新版本的类库到产品环境上
// 可是我们却接到了新的构造函数导致现有的代码不能支持执行了，下面的代码段揭示了这个问题：

var maneuver = function(vehicle) {
    write(vehicle.state());
    vehicle.start();
    write(vehicle.state());
    vehicle.accelerate();
    write(vehicle.state());
    write(vehicle.speed());
    vehicle.decelerate();
    write(vehicle.speed());
    if (vehicle.state() != "idle") {
        throw "The vehicle is still moving!";
    }
    vehicle.stop();
    write(vehicle.state());
};

function write(obj) {
    document.write(obj);
}

















