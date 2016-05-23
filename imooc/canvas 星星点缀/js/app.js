var can, ctx, canvasW, canvasH, girlPic = new Image(), starPic = new Image(), stars = [];

var lastTime, deltaTime, num = 100;

function init() {
    can = document.getElementById('canvas');
    ctx = can.getContext('2d');
    canvasW = can.width;
    canvasH = can.height;
    girlPic.src = './src/girl.jpg';
    starPic.src = './src/star.png';

    for (var i = 0; i < num; i++) {
        var obj = new starObj();
        stars.push(obj);
        stars[i].init();
    }

    lastTime = Date.now();
    gameloop();

}

document.body.onload = init;

function drawBackground() {
    ctx.fillStyle = '#393550';
    ctx.fillRect(0, 0, canvasW, canvasH);
}

function gameloop(){
    window.requestAnimFrame(gameloop);

    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;

    drawBackground();
    drawGirl();
    drawStars();
}

function drawGirl(){
    ctx.drawImage(girlPic, 100, 80, 600, 350);
}


