/**
 * Created by Administrator on 2016/9/19.
 */
/**
 * 桥接模式： 在系统沿着多个纬度变化的同时，又不增加其复杂度并打到解藕。
 * 有时候页面中的一些笑笑细节改变常常因逻辑相似导致大片臃肿代码，让页面苦涩不堪。
 * 高度颗粒化逻辑，将实现层（如元素绑定的事件）和抽象层（修饰页面UI逻辑）解藕分离，使两部分可以单独变化。
 * 由于侨联的添加，有时也会造成开发成本的添加，有时性能也会收到影响。
 */
try {

//
    var spans = document.getElementsByTagName('span');
// 为用户名绑定特效
    spans[0].onmouseover = function(){
        this.style.color = 'red';
        this.style.background = '#ddd';
    };
    spans[0].onmouseout = function(){
        this.style.color = '#333';
        this.style.background = '#f5f5f5';
    };

// 为等级绑定特效
    spans[1].onmouseover = function(){
        this.getElementsByTagName('strong')[0].style.color = 'red';
        this.getElementsByTagName('strong')[0].style.background = '#ddd';
    };

// 提取共同点
    function changeColor(dom, color, bg) {
        dom.style.color = color;
        dom.style.background = bg;
    }

    var spans = document.getElementsByTagName('span');
    spans[0].onmouseover = function(){
        changeColor(this, 'red', '#ddd');
    };

    spans[0].onmouseout = function(){
        changeColor(this, '#333', '#f5f5f5');
    };
}catch(e) {}

// 多元对象
// 多维变量类 基础类
// 运动单元
function Speed(x, y) {
    this.x = x;
    this.y = y;
}
Speed.prototype.run = function(){
    console.log('运动起来');
};
// 着色单元
function Color(cl) {
    this.color = cl;
}
Color.prototype.draw = function(){
    console.log('绘制色彩');
};
// 变形单元
function Shape(sp) {
    this.shape = sp;
}
Shape.prototype.change = function(){
    console.log('改变形状');
};
// 说话单元
function Speak(wd) {
    this.word = wd;
}
Speak.prototype.say = function(){
    console.log('书写字体');
};

// 创建球类，可以运动 着色
function Ball(x,y,c) {
    // 实现运动单元
    this.speed = new Speed(x, y);
    // 实现着色单元
    this.color = new Color(c);
}
Ball.prototype.init = function(){
    // 实现运动
    this.speed.run();
    // 实现着色
    this.color.draw();
};

// 人物 可以运动，说话
function People(x, y, f) {
    this.speed = new Speed(x, y);
    this.font = new Speed(f);
}
People.prototype.init = function(){
    this.speed.run();
    this.font.say();
};



