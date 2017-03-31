var expect = require('chai').expect;

describe('timeout.test.js', function() {
	// 传入的done 要调用才能知道 结束
	it('测试应该 5000 毫秒后结束', function(done) {
		var x = true,
			f = function() {
				x = false;
				expect(x).to.be.not.ok;
				done();
			};
		setTimeout(f, 4000);
	});
});

// mocha -t 5000 超时机制从 5000 将为 2000