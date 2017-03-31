var Nightmare = require('nightmare'),
    nightmare = Nightmare({ show: true }),
    request = require('superagent'),
    expect = require('chai').expect; // mocha 不包含断言库，所以要引入chai

var url = 'http://dev.herely.us/wechat/index.html';

// 测试脚本可以包含一个或多个 describe 组件测试
describe('加法函数测试', function() {

    // beforeEach(function(done) {
    // return getTokenAndSecret(done);
    // });
    it('test11', function(done) {
        var getTokenAndSecret = require('./getTokenAndSecret.js');
        
        nightmare
            .goto(url + '#tool/debug')
            .wait('.btn.btn-blue.btn-width')
            .evaluate(function(getTokenAndSecret, done) {
                return arguments;
                return getTokenAndSecret(done);
            }, getTokenAndSecret, done)
            .end()
            .then(function(res) {
                console.log(res);
                done();
            })
            .catch(function(err) {
                console.log('failed: ' + err);
                done();
            })
    });

    // 每个 describe 包含一个或多个 it 单元测试
    it('1 加 1 应该等于2', function() {
        expect(1 + 1).to.be.equal(2);
    });

    it.skip('测试百度', function(done) {
        this.timeout(15000);
        nightmare
            .goto('http://dev.herely.us/wechat/index.html#space') // 打开百度
            .wait('.list-container .item') // 等待返回
            .evaluate(function() {

            })
            .end()
            .then(function(res) {
                console.log(res);
                done();
            })
            .catch(function(err) {
                cosnole.log('failed: ' + err);
                done();
            });
    })
});
