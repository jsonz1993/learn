var starObj = function(){
	this.x;
	this.y;
}

starObj.prototype = {
	init : function(){
		this.x = Math.random() * 600 + 100;
		this.y = Math.random() * 350 + 100;

		this.draw()
	},

	draw : function(){
		ctx.drawImage(starPic, this.x, this.y);
	}
}

function drawStars() {
	for (var i = 0; i < 60; i++) {
        var obj = new starObj();
        stars.push(obj);
        stars[i].init();
    }
}
