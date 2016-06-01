/**
 * Created by Administrator on 2016/6/1.
 */

var WINDOW_WIDTH = 1024,
    WINDOW_HEIGHT = 768,
    MARGIN_TOP = 60,
    MARGIN_LEFT = 30,
    R = 8,
    endTime = new Date(2016, 5, 1, 18, 47, 52),
    curShowTimeSeconds = 0;

var balls = [],
    colors = ['#33B5E5','#0099CC','#AA66CC','#9933CC','#99CC00','#669900','#FFBB33','#FF8800','#FF4444','#CC00FF'];


window.onload = function (){
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');

    canvas.width = WINDOW_WIDTH;
    canvas.height = WINDOW_HEIGHT;

    curShowTimeSeconds = getCurShowTimeSeconds();

    setInterval(function(){
        render(ctx);
        upDate();
    }, 50);
};

function upDate() {
    var nextShowTimeSeconds = getCurShowTimeSeconds(),
        nextHours = parseInt( nextShowTimeSeconds / 3600),
        nextMinutes = parseInt(( nextShowTimeSeconds - nextHours * 3600) / 60),
        nextSeconds = nextShowTimeSeconds % 60;

    var hours = parseInt(curShowTimeSeconds / 3600),
        minutes = parseInt(curShowTimeSeconds - hours * 3600) / 60,
        seconds = curShowTimeSeconds % 60;

    if (nextSeconds != seconds) {
        if (parseInt(hours / 10) != parseInt(nextHours / 10)) {
            addBalls(MARGIN_LEFT, MARGIN_TOP, parseInt(hours / 10));
        }
        if (parseInt(hours % 10) != parseInt(nextHours % 10)) {
            addBalls(MARGIN_LEFT + 15 * (R + 1), MARGIN_TOP, parseInt((hours % 10)));
        }
        if (parseInt(minutes / 10) != parseInt(nextMinutes / 10)) {
            addBalls(MARGIN_LEFT + 39 * (R + 1), MARGIN_TOP, parseInt(minutes / 10));
        }

        if (parseInt(minutes % 10) != parseInt(nextMinutes % 10)) {
            addBalls(MARGIN_LEFT + 54 * (R + 1), MARGIN_TOP, parseInt(minutes % 10));
        }

        if (parseInt(seconds / 10) != parseInt(nextSeconds / 10)) {
            addBalls(MARGIN_LEFT + 39 * (R + 1), MARGIN_TOP, parseInt(seconds / 10));
        }

        if (parseInt(seconds % 10) != parseInt(nextSeconds % 10)) {
            addBalls(MARGIN_LEFT + 54 * (R + 1), MARGIN_TOP, parseInt(seconds % 10));
        }

        curShowTimeSeconds = nextShowTimeSeconds;
    }

    upDateBalls();
}

function upDateBalls(){
    for (var i = 0; i < balls.length; i++) {
        balls[i].x += balls[i].vx;
        balls[i].y += balls[i].vy;
        balls[i].vy += balls[i].g;

        if (balls[i].y >= WINDOW_HEIGHT - R) {
            balls[i].y = WINDOW_HEIGHT - R;
            balls[i].vy = -balls[i].vy * .5;
        }
    }
}

function addBalls(x, y, num) {
    for (var i = 0; i < digit[num].length; i++) {
        for (var j = 0; j < digit[num][i].length; j++) {
            if (digit[num][i][j] == 1) {
                var aBall = {
                    x : x + j * 2 * (R + 1) + (R + 1),
                    y : y + i * 2 * ( R + 1) + (R + 1),
                    g : 1.5 + Math.random(),
                    vx : Math.pow(-1, Math.ceil(Math.random() * 100)) * 4,
                    vy : -5,
                    color : colors[Math.floor(Math.random() * colors.length)]
                };

                balls.push(aBall);
            }
        }
    }
}

function getCurShowTimeSeconds(){
    var curTime = new Date(),
        ret = endTime.getTime() - curTime.getTime();
    ret = Math.round(ret / 1000);

    return ret >= 0 ? ret : 0;
}

function render(context){

    context.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
    var hours = parseInt(curShowTimeSeconds / 3600),
        minutes = parseInt(curShowTimeSeconds - hours * 3600) / 60,
        seconds = curShowTimeSeconds % 60;

    renderDigit(MARGIN_LEFT, MARGIN_TOP, parseInt(hours / 10), context);
    renderDigit(MARGIN_LEFT + 15 * (R + 1), MARGIN_TOP, parseInt(hours % 10), context);

    renderDigit(MARGIN_LEFT + 30 * (R + 1), MARGIN_TOP, 10, context);

    renderDigit(MARGIN_LEFT + 39 * (R + 1), MARGIN_TOP, parseInt(hours % 10), context);
    renderDigit(MARGIN_LEFT + 54 * (R + 1), MARGIN_TOP, parseInt(minutes / 10), context);

    renderDigit(MARGIN_LEFT + 69 * (R + 1), MARGIN_TOP, 10, context);

    renderDigit(MARGIN_LEFT + 78 * (R + 1), MARGIN_TOP, parseInt(seconds / 10), context);
    renderDigit(MARGIN_LEFT + 93 * (R + 1), MARGIN_TOP, parseInt(seconds % 10), context);


    for (var i = 0; i < balls.length; i++) {
        context.fillStyle = balls[i].color;
        context.beginPath();
        context.arc(balls[i].x, balls[i].y, R, 0, 2 * Math.PI, true);
        context.closePath();

        context.fill();
    }

}

function renderDigit(x, y, num, ctx){
    ctx.fillStyle = 'rgb(0, 102, 153)';

    for (var i = 0; i < digit[num].length; i++) {
        for (var j = 0; j < digit[num][i].length; j++) {
            if (digit[num][i][j] == 1) {
                ctx.beginPath();
                ctx.arc(x + j * 2 * ( R + 1 ) + ( R + 1), y + i * 2 * (R + 1) + (R + 1), R, 0, 2 * Math.PI);
                ctx.closePath();
                ctx.fill();
            }
        }
    }
}