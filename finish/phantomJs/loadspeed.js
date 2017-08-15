// 加载速度
// const page = require('webpage').create()
// const system = require('system')
// let t, address
var page = require('webpage').create(),
  system = require('system'),
  t, address;
if (system.args.length === 1) {
  console.log('Usage: loadspeed.js <some URL>');
  phantom.exit();
}

t = Date.now();
address = system.args[1];

// 不支持箭头函数
// page.open ( address, status=> {})
page.open(address, function(status) {
	if (status !== 'success') console.log('FALL to lad the address')
	else {
		t = Date.now() - t
		console.log('Loading ' + system.args[1])
		console.log('Loading time ' + t + ' msec ')
	}
	phantom.exit()
})
