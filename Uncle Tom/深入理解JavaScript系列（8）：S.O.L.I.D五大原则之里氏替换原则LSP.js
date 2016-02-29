/**
 * Created by Jsonz on 2016/2/29.
 *
 *  �Ѿ�����S.O.L.I.D���ԭ�򳬳��ҵ�������Χ̫�ࡣ��ʱ������
 *
 * �������������̳��ṩ��һ������������͹������Ĵ���
 * ����ͨ���ڻ��������װͨ�õ����ݺ���Ϊ��ʵ�ֵģ�Ȼ���Ѿ�����������������ϸ��������
 * Ϊ��Ӧ�������滻ԭ�򣬼̳���������Ҫ�������ϵȼ��ڻ��������������Ϊ��
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

// ���������������ǰ������ǰ�������ڷ���ͻ��Ĳ�Ʒ������
// ���������Ҫ���һ���µĹ��캯����ʵ�ּӿ��ƶ���vehicle��˼���Ժ�����д�������´��룺

function FastVehicle(my) {
    my = my || {};

    var that = new Vehicle(my);
    that.accelerate = function(){
        my.speed += 3;
    };
    return that;
}

// ��������Ŀ���̨���Ƕ������ˣ�FastVehicle���ٶ�������3�������Ҽ̳����ķ���Ҳ�ǰ������ǵ�Ԥ�ڹ�����
// �˺����ǿ�ʼ��������°汾����⵽��Ʒ������
// ��������ȴ�ӵ����µĹ��캯���������еĴ��벻��֧��ִ���ˣ�����Ĵ���ν�ʾ��������⣺

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

















