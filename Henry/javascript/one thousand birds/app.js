/**
 * Created by Administrator on 2016/2/20.
 */

/**
 *  一千只鸟。
 *  会飞 会死掉
 *  像java一样，继承birds这个工厂的类，在他基础上加特别的东西
 *  方便以后增加鸟的动作和鸟的和类
 *  几类鸟里面实现死的方式
 */



/** 工厂模式
 * 创建一个对象，在该对象上加属性和方法，最后再return出来
 */
function birds(name,die){
    var bird = {};
    bird.name = name;
    bird.die = die;

    bird.sayName = function () {
        return this.name;
    };

    bird.fly = function(){
        return 'I believe I can fly';
    };

    bird.died = function () {
        if (this.die) {
            return this.die;
        } else {
            return '不会死';
        }
    };

    return bird;
}


var birdList = [],
    dieList = [
        {
            index : 3,
            die : '撞树上'
        },
        {
            index : 4,
            die : '撞飞机'
        }
    ],
    dieStr;


for (var i = 0; i < 100; i++) {



    for (var j = 0; j < dieList.length; j++) {
        if (i == dieList[j].index) {
            dieStr = dieList[j].die;
        }
    }

    birdList[i] = birds('第' + (i + 1) + '种鸟',dieStr);

    dieStr = '';

    console.log(birdList[i].sayName());

}






















