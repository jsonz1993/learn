(function() {

    window.addEventListener('load', init, false);

    var starList = [],
        starNum = 120,
        lastTime,
        deltaTime;

    function init() {
    	lastTime = Date.now();

        for (var i = 0; i < starNum; i++) {
            var obj = new StarObj();
            starList.push(obj);
            starList[i].init();
        }

        canvas.init();
        loopDraw()
    }

    var canvas = {
        /* 创建canvas,初始化值 */
        init: function() {
            var _this = this;

            _this.girlPic = new Image();
            _this.girlPic.src = './src/girl.jpg';

            _this.createCanvas();
            _this.canvasEvent();

            _this.mouseInThis = false;
        },

        options: {
            canvasW: 800,
            canvasH: 500,
            bgColor: '#393550',
        },

        /* 创建canvas*/
        createCanvas: function() {
            var _this = this;

            _this.canvas = document.createElement('canvas');
            _this.canvas.width = _this.options.canvasW;
            _this.canvas.height = _this.options.canvasH;
            document.body.appendChild(_this.canvas);

            _this.ctx = _this.canvas.getContext('2d');
        },

        drawBgColor: function() {
            var _this = this;

            _this.ctx.fillStyle = _this.options.bgColor;
            _this.ctx.fillRect(0, 0, _this.canvas.width, _this.canvas.height);
        },

        drawGirl: function() {
            var _this = this;

            _this.ctx.drawImage(_this.girlPic, 100, 80, 600, 350);
        },

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


    function StarObj() {
        this.x = 0;
        this.y = 0;
    }

    StarObj.prototype = {
        init: function() {
            var _this = this;

            _this.leftX = 700 - 7;
            _this.bottomY = 430 - 7;
            _this.x = Util.getRandom(100, _this.leftX);
            _this.y = Util.getRandom(80, _this.bottomY);

            _this.timer = 0; // 闪烁时间
            _this.showSpeed = 8; // 消失间隔
            _this.xSpd = (Util.getRandom(0, 3) - 1.5) * 0.01; // 每次x轴偏移量
            _this.ySpd = (Util.getRandom(0, 3) - 1.5) * 0.01; // 每次y轴偏移量

            _this.posId = Util.getRandom(1, 8);
            _this.opacity = 0;
        },

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
