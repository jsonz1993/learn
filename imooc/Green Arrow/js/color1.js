(function(){
	var box = $('#box'),

		span = 'span',

		e = {
			lvT : _lang[_config.lang].lv_txt, // 获取等级描述
			/**
			 * 说明：给色块设置颜色和标识
			 * @param e 色块边数
			 * @param f 当前等级
			*/
			render : function(e, f){
				// 不解？？？ 直接用e 不也一样，改了源码也没发现什么问题
				var g = _config.color.lvMap[f] || _.last(_config.color.lvMap) // 获取对应的色块个数边

				this.d = 15 * Math.max( 9 - g , 1); // 难度系数
				this.d = f > 20 ? 10 : this.d; // 大于20级难度系数改为 10
				this.d = f > 40 ? 8 : this.d; // 大于40级难度系数改为 8
				this.d = f > 50 ? 5 : this.d; // 大于50级难度系数改为 5

				var h = Math.floor(Math.random() * e * e), // 生成一个随机数，用于设置目标box
					i = this.getColor(255 - this.d), // 干扰色
					j = this.getLvColor(i[0]); // 目标颜色

				// 给box设置背景色和type等
				box.find(span).css('background-color', i[1])
					.eq(h).css('background-color',j[1]).data('type', 'a')
			},

			getColor : function(a) {
				var b = this.d;
				c = _.map(a, function(a) {
					return a + b + 10
				})
			}
		}
})()