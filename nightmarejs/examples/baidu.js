var Nightmare = require('nightmare'),
	nightmare = Nightmare({show: true});

// 获取百度搜索支付宝，等待出现#content_left，取第一条a标签链接

nightmare
	.goto('https://www.baidu.com')
	.type('#kw', '支付宝')
	.click('#su')
	.wait('#content_left')
	.evaluate(function() {
		return document.querySelector('#content_left .result a').href;
	})
	.end()
	.then(function(result) {
		console.log(result);
	})
	.catch(function(error) {
		console.log('search failed:', error);
	});