var add = require('../src/add.js'),
	expect = require('chai').expect;

// mocha 自动跑 test下 目录第一层测试案例 不包括其他子目录
// 可以加 --recursive 参数跑test所有子目录
describe('加法函数测试', function() {
	it('1 加 2 应该等于3', function() {
		expect(add(1, 2)).to.be.equal(3);
	});

	it('任何数加0都等于自身', function() {
		expect(add(1, 0)).to.be.equal(1);
	});
});

// ../node_module/.bin/mocha --reporter mochawesome 生成html