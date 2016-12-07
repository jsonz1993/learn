var add = require('./add.js'),
	expect = require('chai').expect; // mocha 不包含断言库，所以要引入chai

// 测试脚本可以包含一个或多个 describe 组件测试
describe('加法函数测试', function() {

	// 每个 describe 包含一个或多个 it 单元测试
	it('1 加 1 应该等于2', function() {
		expect(add(1, 1)).to.be.equal(2);
	});
});

// chai expect风格
var foo = {bar: 'baz'};
var Foo = function() {}
// 相等或不相等
expect(4 + 5).to.be.equal(9);
expect(4 + 5).to.be.not.equal(10);
expect(foo).to.be.deep.equal({ bar: 'baz' });

// 布尔值为true
expect('everthing').to.be.ok;
expect(false).to.not.be.ok;

// typeof
expect('test').to.be.a('string');
expect({ foo: 'bar' }).to.be.an('object');
// expect(foo).to.be.an.instanceof(Foo);

// include
expect([1,2,3]).to.include(2);
expect('foobar').to.contain('foo');
expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');

// empty
expect([]).to.be.empty;
expect('').to.be.empty;
expect({}).to.be.empty;

// match
expect('foobar').to.match(/^foo/);

// 基本上，expect断言的写法都是一样的。头部是expect方法，尾部是断言方法，比如equal、a/an、ok、match等。两者之间使用to或to.be连接。
// 如果expect断言不成立，就会抛出一个错误。事实上，只要不抛出错误，测试用例就算通过。










