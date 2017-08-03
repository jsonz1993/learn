// 资源请求

var page = require('webpage').create()
var url = 'https://m.easyrentcars.com'
page.onResourceRequested = function(request) {
	console.log('request ' + JSON.stringify(request, undefined, 4))
}
page.onResourceReceived = function(response) {
	console.log('response ' + JSON.stringify(response, undefined, 4))
}
page.open(url)