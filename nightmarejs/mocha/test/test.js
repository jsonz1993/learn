var assert = require('assert');

describe('Array', function() {
	describe('#indexOf()', function() {
		it('should return -1 when the value is not present', function() {
			assert.equal(-1, [1,2,3].indexOf(4));
		});
	})
});

describe('异步测试', function() {
	describe('#save()', function() {
		it('should save without error', function(done) {
			var user = new User('Luna');
			user.save(function(err) {
				if (err) done(err);
				else done();
			});
		});
	});

	describe('#save2()', function() {
		it('should save without error', function(done) {
			var user = new User('Luna');
			user.save(done);
		});
	});
});

beforeEach(function() {
	return db.clear()
		.then(function() {
			return db.save([tobi, loki, jane]);
		});
});

describe('#find()', function() {
	it('respond with matching records', function() {
		return db.find({type: 'User'}).should.eventually.have.length(3);
	})
})
