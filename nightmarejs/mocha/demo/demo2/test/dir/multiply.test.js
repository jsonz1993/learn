var multiply = require('../../src/multiply'),
	expect = require('chai').expect;

describe('乘法函数测试', function() {
	it('1 乘以 1 等于 1', function() {
		expect(multiply(1, 1).to.be.equal(1));
	});
});