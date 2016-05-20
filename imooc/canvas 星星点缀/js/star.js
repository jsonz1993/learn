var StarObj = function(){
	this.x;
	this.y;
}

StarObj.prototype.init = function(){
	this.x = 300;
	this.y = 400;
}

StarObj.prototype.draw = function(){
	ctx.drawImage(starPic, this.x, this.y);
}

