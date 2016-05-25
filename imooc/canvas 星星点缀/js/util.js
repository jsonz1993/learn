window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

window.preImg = function(url, callback){
	var img = new Image();
	img.url = url;
	if (img.complate) {
		callback(img);
	} else {
		img.onload = function(){
			callback(img);
		}
	}
}