// document.body.onload = init;

// var canvas,ctx;
// var girlPic = new Image();

// function init() {
// 	canvas = document.getElementById('canvas');
// 	ctx = canvas.getContext('2d');

// 	girlPic.src = './src/girl.jpg';

// 	drawBackground();
// }


// function drawBackground(){
// 	ctx.fillStyle = '#393550';
// 	ctx.fillRect(0,0, canvas.width, canvas.height);
// }

// function drawGirl() {
// 	ctx.drawImage(girlPic, 100, 100);
// }



// var requestAnimFrame = (function() {
// 	return window.requestAnimFrame || 
// 			window.webkitRequestAnimFrame || 
// 			window.mozRequestAnimFrame ||
// 			function (callback) {
// 				window.setTimeout(callback, 1000 / 60);
// 			};
// })()
var img = new Image();
	img.src = './src/girl.jpg';

window.addEventListener('load', function(){
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');

	ctx.drawImage(img, 0,0)
}, false)



window.onload = function(){
	// preImage('./src/girl.jpg', function(){
	// 	ctx.drawImage(this, 10, 10 )
	// })
}

function preImage(url,callback){  
     var img = new Image(); //创建一个Image对象，实现图片的预下载  
     img.src = url;  
     
    if (img.complete) { // 如果图片已经存在于浏览器缓存，直接调用回调函数  
         callback.call(img);  
        return; // 直接返回，不用再处理onload事件  
     }  
  
     img.onload = function () { //图片下载完毕时异步调用callback函数。  
         callback.call(img);//将回调函数的this替换为Image对象  
     };  
}  