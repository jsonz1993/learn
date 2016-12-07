var expect = require('chai').expect;

describe('测试用例管理', function() {

	// 有 it.only 只会跑该测试
	it.only('1+1=2', function() {
		expect(1+1).to.be.equal(2);
	});
	it('1+2=3', function() {
		expect(1+2).to.be.equal(3);
	});
	// 跳过该测试。
	it.skip('1+3=4', function() {
		expect(1+3).to.be.equal(4);
	})
});