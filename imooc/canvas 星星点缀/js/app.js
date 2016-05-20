window.addEventListener('load', function(){
    canvas.init();
}, false)


var canvas = {
    init : function(){
        var _this = this;

        _this.canvas = document.getElementById('canvas');
        _this.ctx = this.canvas.getContext('2d');
        _this.width = this.canvas.width;
        _this.height = this.canvas.height;

        _this.drawBg();
        _this.drawLoop();
    },

    drawBg : function(){
        var _this = this;

        this.ctx.fillStyle = '#393550';
        this.ctx.fillRect(0, 0, this.width, this.height);

        Util.preImage('./src/girl.jpg', function(img) {
            _this.ctx.drawImage(img, 100, 100, 600, 300)
        })
    },

    drawLoop : function(){
        console.log(1);
    }

}

window.requestAnimFrame(function(){
    console.log(1);
})