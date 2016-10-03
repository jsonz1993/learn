/**
 * Created by Jsonz on 16/10/3.
 */

var dateTimeSelect = (function ($) {
    var _select = function (opts) {
        var _this = this,
            defaults = {
                el: '',
                title: '请选择',
                itemHeight: 48,
                selectedClass: 'selected',
                id: 'id',
                text: 'text',
                initValue: null,
                main: document.body,
                dateStart: new Date(),
                dateNum: 10,
                timeStart: 0,
                timeNum: 24
            };
        _this.option = $.extend(defaults, opts);
        Select.call(_this, _this.option);

    };
    inheritPrototype(_select, Select);

    _select.prototype.init = function () {
        var _this = this;
        this.$el.attr('readonly', true);
        this._renderPanel('select-body-two');
        this.dateSelect = this._renderOption(_this._getDateList());
        this.timeSelect = this._renderOption(_this._getTimeList());
        this.option.initValue && this._setValue(this.option.initValue);
        this.initValue();

        this.$el.on('touchend', function () {
            if (_this.selectPanel.hasClass('show')) _this.hidePanel();
            else _this.showPanel();
        });
        this.selectMask.on('touchend', function () {
            _this.hidePanel();
            _this.option.onCancel && typeof _this.option.onCancel == 'function' && _this.option.onCancel();
        });

        // 按钮事件
        this.okButton.on('touchend', function () {
            var _date = _this.getValue(_this.dateSelect),
                _time = _this.getValue(_this.timeSelect),
                _val = {
                    value: _date.value + ' ' + _time.value,
                    text: _date.text + ' ' + _time.text
                };
            console.log(_val);
            _this._setValue(_val);
            _this.hidePanel();
            _this.option.onOk && typeof _this.option.onOk == 'function' && _this.option.onOk(_this, _val);
        });
        this.cancelButton.on('touchend', function () {
            _this.hidePanel();
            _this.option.onCancel && typeof _this.option.onCancel == 'function' && _this.option.onCancel();
        });

        // touch 事件
        this.dateSelect.scroll = new HerelyScroll(this.dateSelect);
        this.dateSelect.on('touchstart', function () {
            this.dateSelect.lastTranslateY = this._getTransForm(this.dateSelect);
        }.bind(this))
            .on('move', function (e, data) {
                this._transform(this.dateSelect, data.y);
            }.bind(this))
            .on('touchend', function () {
                this._reviseSelect(this.dateSelect);
            }.bind(this));

        this.timeSelect.scroll = new HerelyScroll(this.timeSelect);
        this.timeSelect.on('touchstart', function () {
            this.timeSelect.lastTranslateY = this._getTransForm(this.timeSelect);
        }.bind(this))
            .on('move', function (e, data) {
                this._transform(this.timeSelect, data.y);
            }.bind(this))
            .on('touchend', function () {
                this._reviseSelect(this.timeSelect);
            }.bind(this));

        this.selectPanel.on('touchmove', function () {
            return false;
        });
    };

    _select.prototype.initValue = function () {
        var value = this.$el.data('value'),
            date = value.split(' ')[0],
            time = value.split(' ')[1],
            $date = this.selectPanel.find('li[value="' + date + '"]'),
            $time = this.selectPanel.find('li[value="' + time + '"]'),
            _this = this;
        initEl($date);
        initEl($time);

        function initEl(el) {
            el = el.length ? el : _this.selectPanel.find('.select-data li:eq(2)');
            _this.checkData(el)

        }
    };

    _select.prototype._getDateList = function () {
        var dateList = [],
            dateStart = this.option.dateStart,
            sYear = dateStart.getFullYear(),
            sMonth = dateStart.getMonth(),
            sDate = dateStart.getDate();
        for (var i = 0; i < this.option.dateNum; i++) {
            var nextDate = new Date(sYear, sMonth, sDate + i),
                m = nextDate.getMonth() + 1,
                d = nextDate.getDate(),
                da = nextDate.getDay(),
                w = '日一二三四五六'.charAt(da);
            if (m < 10) m = '0' + m;
            if (d < 10) d = '0' + d;
            dateList[i] = {
                id: m + '-' + d,
                text: m + '月' + d + '日&nbsp;星期' + w
            }
        }
        return dateList;
    };

    _select.prototype._getTimeList = function () {
        var timeList = [];
        for (var i = 0; i < this.option.timeNum; i++) {
            var t = this.option.timeStart + i,
                j = i * 2;
            if (t < 10) t = '0' + t;
            timeList[j] = {
                id: t + ':00',
                text: t + ':00'
            };
            timeList[j + 1] = {
                id: t + ':30',
                text: t + ':30'
            };
        }
        return timeList;
    };

    return _select;
})($);