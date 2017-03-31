var WIDTH = document.documentElement.clientWidth / 1.2,
    HEIGHT = document.documentElement.clientHeight,
    R = 8,
    MARGIN_TOP = 60,
    MARGIN_LEFT = 30,
    R1 = R + 1,
    curShowTime, nextShowTime,
    ballList = [],
    color = ["#33B5E5", "#0099CC", "#AA66CC", "#9933CC", "#99CC00", "#669900", "#FFBB33", "#FF8800", "#FF4444", "#CC0000"],
    posList = [MARGIN_LEFT, 15 * R1 + MARGIN_LEFT, 30 * R1 + MARGIN_LEFT, 39 * R1 + MARGIN_LEFT, 54 * R1 + MARGIN_LEFT, 69 * R1 + MARGIN_LEFT, 78 * R1 + MARGIN_LEFT, 93 * R1 + MARGIN_LEFT];

var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');

canvas.width = WIDTH;
canvas.height = HEIGHT;

window.onload = function() {

    curShowTime = new Date();
    nextShowTime = new Date();
    setInterval(function() {
        upDate();
        render();
    }, 50);
}

function upDate() {

    nextShowTime = new Date();

    if (nextShowTime.getTime() - curShowTime.getTime() >=1000) {
        upBall();
        curShowTime = nextShowTime;
    }
    upDateBalls();
}

function upBall() {
    var nextHours = nextShowTime.getHours(),
        nextMinutes = nextShowTime.getMinutes(),
        nextSeconds = nextShowTime.getSeconds(),
        curHours = curShowTime.getHours(),
        curMinutes = curShowTime.getMinutes(),
        curSeconds = curShowTime.getSeconds();

    if (parseInt(nextSeconds % 10) != parseInt(curSeconds % 10)) {
        addBalls(posList[7], MARGIN_TOP, parseInt(nextSeconds % 10));
    }
    if (parseInt(nextSeconds / 10) != parseInt(curSeconds / 10)) {
    	addBalls(posList[6], MARGIN_TOP, parseInt(nextSeconds / 10));
    }
    if (parseInt(nextMinutes % 10) != parseInt(curMinutes % 10)) {
    	addBalls(posList[5], MARGIN_TOP, parseInt(nextMinutes % 10));
    }
    if (parseInt(nextMinutes / 10) != parseInt(curMinutes / 10)) {
    	addBalls(posList[4], MARGIN_TOP, parseInt(nextMinutes / 10));
    }
    if (parseInt(nextHours % 10) != parseInt(curHours % 10)) {
    	addBalls(posList[5], MARGIN_TOP, parseInt(nextHours % 10));
    }
    if (parseInt(nextHours / 10) != parseInt(curHours / 10)) {
    	addBalls(posList[4], MARGIN_TOP, parseInt(nextHours / 10));
    }

}

function addBalls(x, y, num) {
    for (var i = 0, len = digit[num].length; i < len; i++) {
        for (var j = 0, length = digit[num][i].length; j < length; j++) {
            if (digit[num][i][j] == 1) {
                var ball = {
                    x: x + j * 2 * (R + 1) + (R + 1),
                    y: y + i * 2 * (R + 1) + (R + 1),
                    g: 1.5 + Math.random(),
                    vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 4,
                    vy: -5,
                    color: color[Math.floor(Math.random() * color.length)]
                }

                ballList.push(ball)
            }
        }
    }
}

function upDateBalls() {
    for (var i = 0, len = ballList.length; i < len; i++) {
        ballList[i].x += ballList[i].vx;
        ballList[i].y += ballList[i].vy;
        ballList[i].vy += ballList[i].g;

        if (ballList[i].y >= HEIGHT - R) {
            ballList[i].y = HEIGHT - R;
            ballList[i].vy = -ballList[i].vy * 0.6;
        }
    }

    var cnt = 0;
    for (var i = 0, len = ballList.length; i < len; i++) {
        if (ballList[i].x + R > 0 && ballList[i].x - R < WIDTH) {
            ballList[cnt++] = ballList[i]
        }
    }
    while (ballList.length > cnt) {
        ballList.pop();
    }
}

function render() {
    var hours = nextShowTime.getHours(),
        minutes = nextShowTime.getMinutes(),
        seconds = nextShowTime.getSeconds();

    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    drawNum(posList[0], MARGIN_TOP, parseInt(hours / 10), ctx);
    drawNum(posList[1], MARGIN_TOP, parseInt(hours % 10), ctx);

    drawNum(posList[2], MARGIN_TOP, 10, ctx);

    drawNum(posList[3], MARGIN_TOP, parseInt(minutes / 10), ctx);
    drawNum(posList[4], MARGIN_TOP, parseInt(minutes % 10), ctx);

    drawNum(posList[5], MARGIN_TOP, 10, ctx);

    drawNum(posList[6], MARGIN_TOP, parseInt(seconds / 10), ctx);
    drawNum(posList[7], MARGIN_TOP, parseInt(seconds % 10), ctx);

    // 绘制小球
    for (var i = 0, len = ballList.length; i < len; i++) {
        ctx.fillStyle = ballList[i].color;
        ctx.beginPath();
        ctx.arc(ballList[i].x, ballList[i].y, R, 0, 2 * Math.PI);
        ctx.fill();
    }
}

function drawNum(x, y, num, ctx) {
    ctx.fillStyle = "rgb(0,102,153)";
    for (var i = 0, len = digit[num].length; i < len; i++) {
        for (var j = 0, length = digit[num][i].length; j < length; j++) {
            if (digit[num][i][j] == 1) {
                ctx.beginPath();
                ctx.arc((x + j * 2 * R1 + R1), (y + i * 2 * R1 + R1), R, 0, 2 * Math.PI)

                ctx.fill();
            }
        }
    }
}
