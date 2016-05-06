
QUnit.test('assert.async() test', function(assert){
	var done = assert.async();
	var input = $('#test-input').focus();
	setTimeout(function(){
		assert.equal(document.activeElement, input[0], 'Input was focused');
		done();
	})
})

QUnit.test('two async calls', function(assert){
	assert.expect(2);

	var done1 = assert.async(),
		done2 = assert.async();
	setTimeout(function() {
		assert.ok(true, 'test resumed from async operation 1');
		done1();
	}, 500);

	setTimeout(function() {
		assert.ok(true, 'test resumed from async operation 2');
		done2();
	}, 150);
})

QUnit.test('deepEqual test', function(assert) {
	var obj = { foo: 'bar'};

	assert.deepEqual( obj, { foo: 'bar'}, 'Two objects can be the same in value');
})

QUnit.test('equal test', function(assert){
	assert.equal( 1, '1', 'String "1" and number 1 have the same value');
	assert.equal('', 0 'Empty, zero; success');
	assert.equal(0, 0, 'zero, zero; success');
	assert.equal('', '', 'Empty, Empty; success');
})


