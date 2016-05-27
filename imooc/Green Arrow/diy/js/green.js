(function() {
    var dom = {
            box: $('#box'),
            children: 'span'
        },
        greemMan = {
            lvText: _lang.green.lv_txt,

            init: function(lvMap, lv) {
                this.lvMap = lvMap;
                this.lv = lv;
                this.config = _conf.green;
                this.render();
            },

            render: function() {
                var h = Math.floor(Math.random() * this.lvMap * this.lvMap),
                    i = this.getBg(),
                    j = this.getLvBg();

                dom.box.find(dom.children).css(i)
                    .eq(h).css(j).data('type', 1);
            },

            getBg: function() {
                return {
                    'background': 'url(' + this.config.bg + ')',
                    'background-size'  : 'contain'
                }
            },

            getLvBg: function() {
                return {
                    'background': 'url(' + this.config.lvBg + ')',
                    'background-size'  : 'contain'
                }
            },

            getGameOverText: function(lv) {
                var b = lv > 5 ? Math.ceil(Math.parseInt(lv - 5) / 2) : 0,
                    c = this.lvText[b] || _.last(this.lvText),
                    d = c + 'lv' + lv + '<br>尝尝辣鸡的味道';
                return { html: d };
            }
        };

    window.API.green = greemMan;
})();
