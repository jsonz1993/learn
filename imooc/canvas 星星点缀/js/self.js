(function() {

    window.addEventListener('load', init, false);

    var starList = [], // 存储星星实例
        starNum = 150, // 星星个数
        lastTime, // requestAnimationFrame执行时间标识
        deltaTime; // requestAnimationFrame 执行时间标识

    /*说明：初始化lastTime, 实例化 star, 初始化canvas, 调用循环事件*/
    function init() {
    	lastTime = Date.now(); // 初始化一个lastTime 后面方便计算deltaTime


        for (var i = 0; i < starNum; i++) {
            var obj = new StarObj();
            starList.push(obj);
            starList[i].init();
        }

        canvas.init();
        loopDraw()
    }


    var canvas = {
        /*说明：创建canvas，绑定canvas鼠标事件 */
        init: function() {
            var _this = this;

            _this.createCanvas();
            _this.canvasEvent();

            _this.mouseInThis = false; // 判断是否在图片上的标识
        },

        /*说明：部分canvas配置 没用好*/
        options: {
            canvasW: 800,
            canvasH: 500,
            bgColor: '#393550',
            girlPic : './src/girl.jpg'
        },

        /* 说明：创建canvas，初始化canvas, ctx*/
        createCanvas: function() {
            var _this = this;

            _this.canvas = document.createElement('canvas');
            _this.canvas.width = _this.options.canvasW;
            _this.canvas.height = _this.options.canvasH;
            document.body.appendChild(_this.canvas);

            _this.ctx = _this.canvas.getContext('2d');
        },

        /*说明：绘制背景*/
        drawBgColor: function() {
            var _this = this;

            _this.ctx.fillStyle = _this.options.bgColor;
            _this.ctx.fillRect(0, 0, _this.canvas.width, _this.canvas.height);
        },

        /*说明： 绘制女孩背景图*/
        drawGirl: function() {
            var _this = this;
            
            Util.preImage(_this.options.girlPic, function(img){
            	_this.ctx.drawImage(img, 100, 80, 600, 350);
            })
        },

        /*说明：canvas鼠标事件，判断是否在背景图上，改变mouseInThis标识*/
        canvasEvent : function(){
        	var _this = this;

        	_this.canvas.addEventListener('mousemove', function(e){
        		if (e.offsetX >= 100 && e.offsetX <= 700 && e.offsetY >= 80 && e.offsetY <= 430) {
        			_this.mouseInThis = true;
        		} else {
        			_this.mouseInThis = false;
        		}
        	})
        }
    }

    /*说明： 循环事件 更新lastTime，方便其他地方调用；帧调用绘制canvas背景； 帧调用绘制星星*/
    function loopDraw() {
        var _canvas = canvas,
        	now = Date.now();

        deltaTime = now - lastTime;
        lastTime = now;

        _canvas.drawBgColor();
        _canvas.drawGirl();
        for (var i = 0; i < starNum; i++) {
        	starList[i].upDate();
            starList[i].draw();
        }
        window.requestAnimationFrame(loopDraw);
    }


    // 实例
    function StarObj() {
        this.x = 0; // 星星x坐标
        this.y = 0; // 星星y坐标
        this.leftX = 700 - 7; // 图片右边x轴
        this.bottomY = 430 - 7; // 图片底部y轴
        this.timer = 0; // 闪烁时间
        this.showSpeed = 8; // 消失间隔
        this.xSpd = (Util.getRandom(0, 3) - 1.5) * 0.01; // 每次x轴偏移量
        this.ySpd = (Util.getRandom(0, 3) - 1.5) * 0.01; // 每次y轴偏移量
        this.posId = Util.getRandom(1, 8); // 用于星星闪烁偏移量
        this.opacity = 0; // 星星透明度
    }

    StarObj.prototype = {
    	/*说明：初始化变量一次性东西*/
        init: function() {
            var _this = this;
            
            _this.x = Util.getRandom(100, _this.leftX);
            _this.y = Util.getRandom(80, _this.bottomY);
        },

        /*说明：将星星画在canvas上；处理透明度*/
        draw: function() {
            var _this = this,
            	_canvas = canvas;

            _canvas.ctx.save();
            _canvas.ctx.globalAlpha = _this.opacity;
            Util.preImage('./src/star.png', function(img) {
                canvas.ctx.drawImage(img, _this.posId * 7, 0, 7, 7, _this.x, _this.y, 7, 7);
            })
            _canvas.ctx.restore();
        },

        /*说明： 更新数据；更新偏移量；判断是否偏移出背景，是就重新初始化；更新图片位置标识；处理透明度*/
        upDate : function(){
        	var _this = this,
        		_canvas = canvas;

        	_this.timer += deltaTime;
        	_this.x += _this.xSpd * deltaTime;
        	_this.y += _this.ySpd * deltaTime;

        	if (_this.x > _this.leftX || _this.x < 100 || _this.y > _this.bottomY || _this.y < 80) {
        		_this.init();
        		return;
        	}

        	if (_this.timer > 150) {
        		_this.posId ++;
        		_this.posId %= _this.showSpeed;
        		_this.timer = 0;
        	}

        	var speed = 0.002 * deltaTime;
        	if (_canvas.mouseInThis) {
        		_this.opacity += speed;
        		if (_this.opacity > 1) {
        			_this.opacity = 1;
        		}
        	} else {
        		_this.opacity -= speed;
        		if (_this.opacity < 0) {
        			_this.opacity = 0;
        		}
        	}
        }
    }

})();












window.requestAnimationFrame = (function() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
        }
})()

var Util = {

    preImage: function(src, callback) {
        var img = new Image();
        img.src = src;

        if (img.complete) {
            callback(img);
        } else {
            img.addEventListener('load', function() {
                callback(img);
            })
        }
    },

    getRandom: function(min, max) {
        return parseInt(Math.random() * (max - min) + min);
    }
}
