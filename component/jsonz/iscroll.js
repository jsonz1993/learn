/**
 * Created by Jsonz on 16/10/1.
 */
// 监听touchstart, touchmove, touchend
// 发布事件 回调参数 this
var HerelyScroll = (function () {

    var _iscroll = function (el) {
        this.$el = $(el);

        // 绑定事件
        this.$el[0].addEventListener('touchstart', function(e){
            this._start(e);
        }.bind(this), false);
        this.$el[0].addEventListener('touchmove', function(e){
            this._move(e);
        }.bind(this), false);
        this.$el[0].addEventListener('touchend', function(e){
            this._end(e);
        }.bind(this), false);
    };

    _iscroll.prototype = {
        _start: function (e) {
            var point = e.touches ? e.touches[0] : e,
                _this = this;

            // 存储总移动变量
            _this.x = 0;
            _this.y = 0;
            // 存储上一个移动点
            _this.lastPointX = point.pageX;
            _this.lastPointY = point.pageY;

            _this.$el.trigger('start', _this);

            _this.prevDefault(e);
        },
        _move: function (e) {
            var point = e.touches ? e.touches[0] : e,
                deltaX, deltaY,
                _this = this;

            deltaX = point.pageX - _this.lastPointX;
            _this.lastPointX = point.pageX;
            deltaY = point.pageY - _this.lastPointY;
            _this.lastPointY = point.pageY;
            _this.x += deltaX;
            _this.y += deltaY;

            _this.$el.trigger('move', _this);

            _this.prevDefault(e);
        },

        _end: function (e) {
            this.$el.trigger('end', this);

            this.prevDefault(e);
        },

        prevDefault: function(e) {
            e.preventDefault();
            e.stopPropagation();
        }
    };
    return _iscroll;
})();



