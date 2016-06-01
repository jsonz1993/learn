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
        curShowTimeSeconds = nextShowTimeSeconds;
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