/**
 * Created by Jsonz on 16/9/17.
 */

/**
 * 原型模式
 *
 *
 */


/**
 * 创建一个焦点图
 *
 */

// 图片轮播类
var LoopImages = function(imgArr, container) {
    this.imagesArray = imgArr; // 轮播图片数组
    this.container = container; // 轮播图片容器
    this.createImage = function(){}; // 创建轮播图片
    this.changeImage = function(){}; // 切换下一张图片
};

// 应该抽象出一个基类，让不同特效类去继承这个基类，然后对于差异化的需求通过重写这些继承下来的属性或方法来解决。
// 上下滑动切换类
var SlideLoopImg = function(imgArr, container) {
    // 构造器函数继承图片轮播类
    LoopImages.call(this, imgArr, container);
    // 重写继承的切换下一张图片方法
    this.changeImage = function(){
        console.log('SlideLoopImg changeImage function');
    }
};

// 渐隐切换类
var FadeLoopImg = function(imgArr, container, arrow){
    LoopImages.call(this, imgArr, container);
    this.arrow = arrow;
    this.changeImage = function(){
        console.log('FadeLoopImg changeImage function');
    }
};

// 实例化一个渐隐切换图片类
var fadeImg = new FadeLoopImg([
    '01.jpg',
    '02.jpg',
    '03.jpg'
], 'slide', [
    'left.jpg',
    'right.jpg'
]);
fadeImg.changeImage();


// 上述例子存在一些问题： 每次继承都要创建一次父类。 改造后
// 图片轮播类
var LoopImages = function(imgArr, container) {
    this.imagesArray = imgArr; // 轮播图片数组
    this.container = container; // 轮播图片容器
};
LoopImages.prototype = {
    createImage: function(){
        console.log('LoopImages createImage function');
    },
    changeImage: function(){
        console.log('LoopImages changeImage function');
    }
};

// 上下滑动切换类
var SlideLoopImg = function(imgArr, container) {
    // 构造器函数继承图片轮播类
    LoopImages.call(this, imgArr, container);
};
SlideLoopImg.prototype = new LoopImages();
SlideLoopImg.prototype.changeImage = function(){
    console.log('slideLoopImg changeImage function');
};

// 渐隐切换类
var FadeLoopImg = function(imgArr, container, arrow){
    LoopImages.call(this, imgArr, container);
    this.arrow = arrow;
};
FadeLoopImg.prototype = new LoopImages();
FadeLoopImg.prototype.changeImage = function(){
    console.log('FadeLoopImg changeImage function');
};

// 实例化一个渐隐切换图片类
var fadeImg = new FadeLoopImg([
    '01.jpg',
    '02.jpg',
    '03.jpg'
], 'slide', [
    'left.jpg',
    'right.jpg'
]);
fadeImg.changeImage();
// 存在一个问题，以前也提过，在继承的时候实例化了两次父类。

// 自己改进, f() && p() 可以封装起来
var JsonzLoopImages = function(imgArr, container) {
    this.imagesArray = imgArr; // 轮播图片数组
    this.container = container; // 轮播图片容器
};
JsonzLoopImages.prototype = {
    createImage: function(){
        console.log('JsonzLoopImages createImage function');
    },
    changeImage: function(){
        console.log('JsonzLoopImages changeImage function');
    }
};

var JsonzFadeLoopImg = function(imgArr, container, arrow) {
    JsonzLoopImages.call(this, imgArr, container);
    this.arrow = arrow;
};

var f = function(){};
f.prototype = JsonzLoopImages.prototype;
var p = new f();
p.container = p.prototype;
JsonzFadeLoopImg.prototype = p;

JsonzFadeLoopImg.prototype.changeImage = function(){
    console.log('JsonzImages changeImage');
};
var jsonzFadeLoopImg1 = new JsonzFadeLoopImg(['1.jpg','2.jpg'], 'container1', ['left.jpg']),
    jsonzFadeLoopImg2 = new JsonzFadeLoopImg(['3.jpg'], 'container2', ['right.jpg']);

jsonzFadeLoopImg1.createImage();
jsonzFadeLoopImg2.changeImage();