/**
 * Created by Jsonz on 16/9/28.
 */
!function(a){var b={},c={};c.attachEvent=function(b,c,d){return"addEventListener"in a?b.addEventListener(c,d,!1):void 0},c.fireFakeEvent=function(a,b){return document.createEvent?a.target.dispatchEvent(c.createEvent(b)):void 0},c.createEvent=function(b){if(document.createEvent){var c=a.document.createEvent("HTMLEvents");return c.initEvent(b,!0,!0),c.eventName=b,c}},c.getRealEvent=function(a){return a.originalEvent&&a.originalEvent.touches&&a.originalEvent.touches.length?a.originalEvent.touches[0]:a.touches&&a.touches.length?a.touches[0]:a};var d=[{test:("propertyIsEnumerable"in a||"hasOwnProperty"in document)&&(a.propertyIsEnumerable("ontouchstart")||document.hasOwnProperty("ontouchstart")),events:{start:"touchstart",move:"touchmove",end:"touchend"}},{test:a.navigator.msPointerEnabled,events:{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}},{test:a.navigator.pointerEnabled,events:{start:"pointerdown",move:"pointermove",end:"pointerup"}}];b.options={eventName:"tap",fingerMaxOffset:11};var e,f,g,h,i={};e=function(a){return c.attachEvent(document.body,h[a],g[a])},g={start:function(a){a=c.getRealEvent(a),i.start=[a.pageX,a.pageY],i.offset=[0,0]},move:function(a){return i.start||i.move?(a=c.getRealEvent(a),i.move=[a.pageX,a.pageY],void(i.offset=[Math.abs(i.move[0]-i.start[0]),Math.abs(i.move[1]-i.start[1])])):!1},end:function(d){if(d=c.getRealEvent(d),i.offset[0]<b.options.fingerMaxOffset&&i.offset[1]<b.options.fingerMaxOffset&&!c.fireFakeEvent(d,b.options.eventName)){if(a.navigator.msPointerEnabled||a.navigator.pointerEnabled){var e=function(a){a.preventDefault(),d.target.removeEventListener("click",e)};d.target.addEventListener("click",e,!1)}d.preventDefault()}i={}},click:function(a){return c.fireFakeEvent(a,b.options.eventName)?void 0:a.preventDefault()}},f=function(){for(var a=0;a<d.length;a++)if(d[a].test)return h=d[a].events,e("start"),e("move"),e("end"),!1;return c.attachEvent(document.body,"click",g.click)},c.attachEvent(a,"load",f),a.Tap=b}(window);

(function () {
    $.fn.mdate = function (config) {
        var defaults = {
                maxDate: null,
                minDate: new Date(1970, 0, 1)
            },
            option = $.extend(defaults, config),
            input = this;

        // 通用函数
        var F = {
            // 计算某年某月有多少天
            getDaysInMonth: function(year, month){
                return new Date(year, month+1, 0).getDate();
            },
            // 计算某月1号是星期几
            getWeekInMonth: function(year, month) {
                return new Date(year, month, 1).getDay();
            },
            getMonth: function(m) {
                return ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'][m];
            },
            // 计算某年某月最后一天的日期
            getLastDayInMonth: function(year, month) {
                return new Date(year, month, this.getDaysInMonth(year, month));
            }
        };

        // 为$扩展一个方法，以配置的方式代理事件
        $.fn.delegates = function(configs) {
            el = $(this[0]);
            for (var name in configs) {
                var value = configs[name];
                if (typeof value === 'function') {
                    var obj = {};
                    obj.tap = value;
                    value = obj;
                }
                for (var type in value) {
                    el.on(name, type, value[type]);
                }
            }
            return this;
        };

        var mdater = {
            value: {
                year: '',
                month: '',
                date: ''
            },
            lastCheckedDate: '',
            init: function(){
                this.renderHTML();
                this.initListeners();
            },
            renderHTML: function(){
                var $html = $('<div class="md_mask"></div><div class="md_panel"><div class="md_head"><div class="md_selectarea"><a class="md_prev change_year" href="javascript:void(0);">&lt;</a> <a class="md_headtext yeartag" href="javascript:void(0);"></a> <a class="md_next change_year" href="javascript:void(0);">&gt;</a></div><div class="md_selectarea"><a class="md_prev change_month" href="javascript:void(0);">&lt;</a> <a class="md_headtext monthtag" href="javascript:void(0);">月</a> <a class="md_next change_month" href="javascript:void(0);">&gt;</a></div></div><div class="md_body"><ul class="md_weekarea"><li>日</li><li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li>六</li></ul><ul class="md_datearea in"></ul></div><div class="md_foot"><a href="javascript:void(0);" class="md_ok">确定</a> <a href="javascript:void(0);" class="md_cancel">取消</a></div></div>');
                $(document.body).append($html);
            },
            _showPanel: function(container){
                this.refreshView();
            }
        }
    }
})();