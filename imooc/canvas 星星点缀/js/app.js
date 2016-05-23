var can, ctx, canvasW, canvasH, girlPic = new Image(), starPic = new Image(), stars = [];

function init() {
    can = document.getElementById('canvas');
    ctx = can.getContext('2d');
    canvasW = can.width;
    canvasH = can.height;
    girlPic.src = './src/girl.jpg';
    starPic.src = './src/star.png';

    for (var i = 0; i < 60; i++) {
        var obj = new starObj();
        stars.push(obj);
        stars[i].init();
    }

    gameloop();



}

document.body.onload = init;

function drawBackground() {
    ctx.fillStyle = '#393550';
    ctx.fillRect(0, 0, canvasW, canvasH);
}

function gameloop(){
    window.requestAnimFrame(gameloop);
    drawBackground();
    drawGirl();
    drawStars();
}

function drawGirl(){
    ctx.drawImage(girlPic, 100, 80, 600, 350);
}


