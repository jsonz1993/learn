export default {
	// 返回包含a 与 b 的随机整数
	getRandom : function(a, b) {
		return parseInt(Math.random() * (b - a) + a, 10);
	},

	goBack : function(){
		history.go(-1);
	}
}