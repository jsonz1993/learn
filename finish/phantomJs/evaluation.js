// 执行环境
var page = require('webpage').create()
<<<<<<< HEAD
var url = 'you url'
=======
var url = 'your url'
>>>>>>> 7693b3adb9d094f7db95917f1254e333c0936225

// page.open(url, function(status) {
// 	var title = page.evaluate(function() {
// 		return document.title
// 	})
// 	console.log('page title is ' + title)
// 	phantom.exit()
// })

page.onConsoleMessage = function(msg) {
	console.log('Page title is ' + msg)
}

page.open(url, function(status) {
	page.evaluate(function() {
		console.log(document.title)
	})
	phantom.exit()
})
