var Nightmare = require('nightmare'),
	expect = require('chai').expect,
	fork = require('child_process').fork;

describe('test index.html', function() {
	var child;

	before(function(done) {
		child = fork('./server.js');
		child.on('message', function(msg) {
			if (msg === 'listening') {
				done();
			}
		});
	});

	after(function() {
		child.kill();
	})
});


it('点击后标题改变', function() {
	var nightmare = Nightmare({show: true});
	nightmare
		.goto('http://127.0.0.1:8080/index.html')
		.click('h1')
		.wait(1000)
		.evaluate(function() {
			return document.querySelector('h1').textContent;
		})
		.end()
		.then(function(text) {
			expect(text).to.equal('hello clicked');
			done;
		});
});