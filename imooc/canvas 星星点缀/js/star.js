var starObj = function(){
	this.x;
	this.y;

	this.xSpd;
	this.ySpd;
	this.spd = 3;

	this.timer;
}

starObj.prototype = {
	init : function(){
		this.x = Math.random() * 600 + 100;
		this.y = Math.random() * 350 + 100;
		this.posId = Math.floor(Math.random() * 7);
		this.timer = 0;

		this.xSpd = Math.random() * this.spd - 1.5;
		this.ySpd = Math.random() * this.spd - 1.5;
	},

	draw : function(){
		// img, sx, sy, swidth, sheight, x , y, width, height
		ctx.drawImage(starPic, this.posId * 7 , 0, 7, 7, this.x, this.y, 7, 7);
	},

	upDate : function(){
		this.timer += deltaTime;

		this.x += this.xSpd * deltaTime * 0.01;
		this.y += this.ySpd * deltaTime * 0.005;

		if (this.x > 700 || this.x < 100 || this.y > 450 || this.y < 100) {
			this.init();
			return;
		}
		if (this.y > 450) this.y = Math.random() * 350 + 100;

		if (this.timer > 100) {
			this.posId ++;
			this.posId %= 7;
			this.timer = 0;
		}
	}
}

function drawStars() {
	for (var i = 0; i < num; i++) {
		stars[i].upDate();
		stars[i].draw();
	}
}
