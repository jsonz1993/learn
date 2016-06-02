/**
 * Created by Administrator on 2016/5/31.
 */


var arr = [
    {
        p: [{x: 0, y: 0}, {x: 250, y: 250},{x:500,y:0}],
        color:'#caff67' // 绿色
    },
    {
        p: [{x:0,y:0},{x:250,y:250},{x:0,y:500}],
        color: '#67becf' // 蓝色
    },
    {
        p:[{x:800,y:0},{x:800,y:400},{x:600,y:600},{x:600,y:200}],
        color:'#ef3d61'
    },
    {
        p:[{x:600,y:200},{x:600,y:600},{x:400,y:400}],
        color:'#f9f51a'
    },
    {
        p:[{x:400,y:400},{x:600,y:600},{x:400,y:800},{x:200,y:600}],
        color:'#a594c0'
    },
    {
        p:[{x:200,y:600},{x:400,y:800},{x:0,y:800}],
        color:'#fa8ecc'
    },
    {
        p:[{x:800,y:400},{x:800,y:800},{x:400,y:800}],
        color:'#f6ca29'
    }
];

window.onload = function(){

    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');

    canvas.width = 500;
    canvas.height = 500;

    for (var i = 0; i < arr.length; i++) {
        draw(arr[i], ctx);
    }
};

function draw(data, ctx){
    ctx.beginPath();

    ctx.moveTo(data.p[0].x, data.p[0].y);
    for (var i = 1; i < data.p.length; i++) {
        ctx.lineTo(data.p[i].x, data.p[i].y);
    }

    ctx.fillStyle = 'black';
    ctx.closePath();
    ctx.fillStyle = data.color;
    ctx.fill();

    ctx.stroke();
}