(function() {
    var box = $('#box'),

        span = 'span',

        e = {
            lvT: _lang[_config.lang].lv_txt, // 获取等级描述
            /**
             * 说明：给色块设置颜色和标识
             * @param e 色块边数
             * @param f 当前等级
             */
            render: function(e, f) {
                // 不解？？？ 直接用e 不也一样，改了源码也没发现什么问题
                var g = _config.color.lvMap[f] || _.last(_config.color.lvMap) // 获取对应的色块个数边

                this.d = 15 * Math.max(9 - g, 1); // 难度系数
                this.d = f > 20 ? 10 : this.d; // 大于20级难度系数改为 10
                this.d = f > 40 ? 8 : this.d; // 大于40级难度系数改为 8
                this.d = f > 50 ? 5 : this.d; // 大于50级难度系数改为 5

                var h = Math.floor(Math.random() * e * e), // 生成一个随机数，用于设置目标box
                    i = this.getColor(255 - this.d), // 干扰色
                    j = this.getLvColor(i[0]); // 目标颜色

                // 给box设置背景色和type等
                box.find(span).css('background-color', i[1])
                    .eq(h).css('background-color', j[1]).data('type', 'a')
            },

            /*说明：根据难度系数生成随机颜色，返回[随机色数组，随即色rgb]*/
            getColor: function(a) {
                var b = [
                        Math.round(Math.random() * a),
                        Math.round(Math.random() * a),
                        Math.round(Math.random() * a)
                    ],
                    c = "rgb(" + b.join(",") + ")";
                return [b, c]
            },

            /*说明：根据目标色+难度系数生成目标颜色+10/-10(用于降低难度)*/
            getLvColor: function(a) {
                var b = this.d,
                    c = _.map(a, function(a) {
                        return a + b + _.sample([10, -10]);
                    }),
                    d = "rgb(" + c.join(",") + ")";
                return [c, d]
            },

            getGameOverText: function(lv) {
                var b = 20 > lv ? 0 : Math.ceil((lv - 20) / 10); // 小于20分都为瞎子，大于20分的除十向上取整去匹配等级
                var c = this.lvT[b] || _.last(this.lvT);  // 利用b去匹配等级，如果没有则用最高级
                var d = c+"lv"+lv;
                return {txt: d}
            }};
        }
})()
