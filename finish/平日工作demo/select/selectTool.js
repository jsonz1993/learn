/**
 * Created by Jsonz on 16/9/29.
 * 下拉组件
 */

var Select = (function () {

    var _select = function (opts) {
        var _this = this,
            defaults = {
                el: '', // 触发事件
                data1: '', // 循环遍历的data
                title: '请选择', // 标题
                onOk: null, // 确定回调
                onCancel: null, // 取消回调
                itemHeight: 48, // 一个li高度
                selectedClass: 'selected', // 选中class
                id: 'id', // id标识，一般为后台标识
                text: 'text', // text 一般为前端显示文案
                initValue: null, // 需要初始化的默认值
                main: document.body,
                postfix: ''
            };
        _this.option = $.extend(defaults, opts);
        _this.$el = $(_this.option.el);
        _this.init();
    };

    _select.prototype = {
        // 初始化
        init: function () {
            var _this = this;
            // 传入的data是数组，将其转成对象
            if (typeof _this.option.data1[0] !== 'object') _this.option.data1 = _this._arrayToObject(_this.option.data1);
            this.$el.attr('readonly', true);
            this._renderPanel(); // 渲染主要模板
            this.select = this._renderOption(_this.option.data1); // 渲染list模板
            if (this.option.initValue) {
                this._setValue(this.option.initValue); //如果需要初始值
            }
            this.initValue(); // 初始化值

            // 显示隐藏
            this.$el.on('touchend', function () {
                if (_this.selectPanel.hasClass('show')) {
                    _this.hidePanel();
                } else {
                    _this.showPanel();
                    _this.initValue();
                }
            });
            this.selectMask.on('touchend', function () {
                _this.hidePanel();
                _this.option.onCancel && typeof _this.option.onCancel == 'function' && _this.option.onCancel();
            });

            // 按钮事件
            this.okButton.on('touchend', function () {
                var _val = _this.getValue(_this.select);
                _this._setValue(_val);
                _this.hidePanel();
                _this.option.onOk && typeof _this.option.onOk == 'function' && _this.option.onOk(_this, _val);
            });
            this.cancelButton.on('touchend', function () {
                _this.hidePanel();
                _this.option.onCancel && typeof _this.option.onCancel == 'function' && _this.option.onCancel();
            });

            // touch 事件
            this.select.scroll = new HerelyScroll(_this.selectEl);
            this.selectEl.on('touchstart', function () {
                this.select.lastTranslateY = this._getTransForm(this.select);
            }.bind(this))
                .on('move', function (e, data) {
                    this._transform(this.select, data.y);
                }.bind(this))
                .on('touchend', function () {
                    this._reviseSelect(this.select);
                }.bind(this));

            this.selectPanel.on('touchmove', function(){
                return false;
            });
        },

        // 填充默认结构到html
        _renderPanel: function (className) {
            var $selectMask = $('.select-mask'),
                htmlTemp = '<div class="select-title">'+this.option.title+'</div><div class="select-body '+(className || '')+'"><div class="select-indicate"></div></div><div class="select-confirm"><a class="select-ok">确定</a><a class="select-cancel">取消</a></div>';
            this.selectMask = $selectMask.length ? $selectMask : $('<div class="select-mask"></div>').appendTo(this.option.main);
            this.selectPanel = $('<div class="select-panel"></div>');
            this.selectPanel.append(htmlTemp);
            $(this.option.main).append(this.selectPanel);
            this.okButton = $('.select-ok', this.selectPanel);
            this.cancelButton = $('.select-cancel', this.selectPanel);
        },

        // 循环遍历data 填充 this.selectPanel
        _renderOption: function (data) {
            var _this = this,
                htmlTemp = '<div class="select-data"><ul><li></li><li></li>';
            for (var i = 0; i < data.length; i++) {
                htmlTemp += '<li value="' + data[i][_this.option.id] + '">' + data[i][_this.option.text] + _this.option.postfix + '</li>';
            }
            htmlTemp += '</ul></div>';
            _this.selectEl = $(htmlTemp);
            _this.selectEl.insertBefore($('.select-indicate', _this.selectPanel));
            _this.selectEl.minOffset = 0; // 最小偏移量
            _this.selectEl.maxOffset = (_this.selectEl.find('li').length - 3) * _this.option.itemHeight; // 最大偏移量
            return _this.selectEl;
        },

        // 显示
        showPanel: function () {
            this.selectPanel.addClass('show');
            this.selectMask.addClass('show');
        },

        // 隐藏
        hidePanel: function () {
            this.selectPanel.removeClass('show');
            this.selectMask.removeClass('show');
        },

        // 根据li 滚动到特定位置
        checkData: function (el) {
            var $el = $(el),
                target = $el.prev('li').prev('li'),
                selectedClass = this.option.selectedClass,
                top;

            if (target.length && target.position()) {
                top = target.position().top;
                var cssStr = 'translate3d(0, ' + top * -1 + 'px, 0)';
                $el.parents('.select-data').css('transform', cssStr).find(el).addClass(selectedClass).siblings().removeClass(selectedClass);
            }
        },

        // 跳转到特定的地方
        _transform: function (el, y) {
            var resPos = el.lastTranslateY + y,
                _this = this;
            resPos = Math.min(resPos, el.minOffset);
            resPos = Math.max(resPos, el.maxOffset * -1);
            var cssStr = 'translate3d(0, ' + resPos + 'px, 0)',
                nowSelect = Math.abs(_this._revisePos(el) / this.option.itemHeight) + 2;
            el.css('transform', cssStr).find('li').eq(nowSelect).addClass(_this.option.selectedClass).siblings().removeClass(_this.option.selectedClass);
        },

        // 修正当前项
        _reviseSelect: function (el) {
            var nowPos = this._revisePos(el),
                cssStr = 'translate3d(0, ' + nowPos + 'px, 0)',
                nowSelect = Math.abs(nowPos / this.option.itemHeight) + 2;
            el.css('transform', cssStr).find('li').eq(nowSelect).addClass(this.option.selectedClass).siblings().removeClass(this.option.selectedClass);
        },

        // 修正偏移量
        _revisePos: function (el) {
            var pos = Math.abs(this._getTransForm(el)),
                itemHeight = this.option.itemHeight,
                isNext = (pos % itemHeight) > (itemHeight / 2),
                res = parseInt(pos / itemHeight) * itemHeight;
            if (isNext) res += itemHeight;
            return res * -1;
        },

        // 获取滑动开始时偏移量
        _getTransForm: function (el) {
            var css = el.css('transform');
            return parseInt(css.slice(css.lastIndexOf(',') + 1, css.lastIndexOf(')'))) || 0;
        },

        // 初始化设置值
        initValue: function () {
            var value = this.$el.data('value'),
                _this = this,
                $el = this.selectPanel.find('li[value="' + value + '"]');
            $el = $el.length ? $el : this.selectPanel.find('li:eq(2)');

            this.checkData($el);
        },

        // 获取选中的值
        getValue: function (el) {
            el = el || this.selectPanel;
            var $selected = el.find('.' + this.option.selectedClass),
                _val = $selected.attr('value'),
                _text = $selected.text();
            return {
                value: _val,
                text: _text,
                index: $selected.index() - 2
            }
        },

        // 设置值到input上,内部使用
        _setValue: function(val){
            this.$el.data('value', val.value || val[this.option.id]).val(val.text || val[this.option.text]);
        },

        // 数组转数组对象，{id:val, text: val}
        _arrayToObject: function(arr) {
            var tempObj = [];
            for (var i = 0; i < arr.length; i++) {
                tempObj[i] = {
                    id: arr[i],
                    text: arr[i]
                }
            }
            return tempObj;
        },

        // 删除自身
        remove: function(){
            this.selectPanel.remove();
        },

        // 设置值到Input上，更新li位置 外部使用
        setValue: function(val){
            this._setValue(val);
            this.initValue();
        }
    };

    return _select;
})();


