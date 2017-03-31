import add from '../src/add.js';
import chai from 'chai';

let expect = chai.expect;

describe('假发函数的测试', function() {
	it('1 加1 应该等于 2', function() {
		expect(add(1, 1)).to.be.equal(2);
	});
});