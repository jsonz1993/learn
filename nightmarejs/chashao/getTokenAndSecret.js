var Nightmare = require('nightmare'),
    nightmare = Nightmare({ show: true }),
    request = require('superagent'),
    expect = require('chai').expect; // mocha 不包含断言库，所以要引入chai

var url = 'http://dev.herely.us/wechat/index.html';

function getTokenAndSecret(done) {
    return request
        .post('/api/mixed/GetTokenAndSecret')
        .end(function(err, res) {
            if (err) console.log(err);
            done();
        });
}

module.exports = getTokenAndSecret;
