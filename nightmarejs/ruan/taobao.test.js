var Nightmare = require('nightmare'),
    nightmare = Nightmare({ show: true ,waitTimeout: 10000 });
var expect = require('chai').expect;

describe('测试', function() {
    it('ceshi', function(done) {
        nightmare
            .goto('https:www.taobao.com')
            .type('#q', '电视机')
            .click('form[action*="/search"] [type=submit]')
            .wait('#spulist-grid')
            .evaluate(function() {
                return document.querySelector('#spulist-grid .grid-item .info-cont')
                    .textContent.trim();
            })
            .end()
            .then(function(result) {
                console.log(result);
                done();
            })
            .catch(function(error) {
                console.error('Search failed: ', error);
                done();
            });
    });
});
