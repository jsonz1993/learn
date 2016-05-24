var can, ctx, canvasW, canvasH, girlPic = new Image(), starPic = new Image(), stars = [];

var lastTime, deltaTime, num = 100, switchY = false, live = 0;

function init() {
    can = document.getElementById('canvas');
    ctx = can.getContext('2d');
    canvasW = can.width;
    canvasH = can.height;
    girlPic.src = './src/girl.jpg';
    starPic.src = './src/star.png';

    document.addEventListener('mousemove',mousemove,false)

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
    aliveUpdate();
}

function drawGirl(){
    ctx.drawImage(girlPic, 100, 80, 600, 350);
}

function mousemove(e){
    if (e.offsetX || e.layerX) {
        var pX = e.offsetX || e.layerX;
        var pY = e.offsetY || e.layerY;

        if (pX > 100 && pX < 700 && pY > 80 && pY < 430) {
            switchY = true;
        } else {
            switchY = false;
        }
    }
}
