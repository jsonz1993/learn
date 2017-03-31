#### async( [acceptCallCount ] )

	acceptCallCount (default: 1)
	Type: Number
	Number of expected callbacks before the test is done.
	
Description: Instruct QUnit to wait for an asynchronous operation.
	
The callback returned from `assert.async()` will throw an Error if it is invoked more than once (or more often than the accepted call count, if provided).

This replaces functionality previously provided by `QUnit.stop()` and `QUnit.start()`.

__Examples__

Tell QUnit to wait for the done() call inside the timeout.

	QUnit.test( "assert.async() test", function( assert ) {
	  var done = assert.async();
	  var input = $( "#test-input" ).focus();
	  setTimeout(function() {
	    assert.equal( document.activeElement, input[0], "Input was focused" );
	    done();
	  });
	});
	
Call `assert.async()` for each operation. Each done callback can be called at most once.

	QUnit.test( "two async calls", function( assert ) {
	  assert.expect( 2 );
	 
	  var done1 = assert.async();
	  var done2 = assert.async();
	  setTimeout(function() {
	    assert.ok( true, "test resumed from async operation 1" );
	    done1();
	  }, 500 );
	  setTimeout(function() {
	    assert.ok( true, "test resumed from async operation 2" );
	    done2();
	  }, 150);
	});
	
Set up an async test three exit points. Each `done()` call adds up to the `acceptCallCount`. After three calls, the test is done.

	QUnit.test( "multiple call done()", function( assert ) {
	  assert.expect( 3 );
	  var done = assert.async( 3 );
	 
	  setTimeout(function() {
	    assert.ok( true, "first call done." );
	    done();
	  }, 500 );
	 
	  setTimeout(function() {
	    assert.ok( true, "second call done." );
	    done();
	  }, 500 );
	 
	  setTimeout(function() {
	    assert.ok( true, "third call done." );
	    done();
	  }, 500 );
	});
	

#### deepEqual( actual, expected [, message ] )

Description: A deep recursive comparison, working on primitive types, arrays, objects, regular expressions, dates and functions.

	actual
	Type: Object
	Object or Expression being tested
	
	expected
	Type: Object
	Known comparison value
	
	message
	Type: String
	A short description of the assertion
	
The `deepEqual()` assertion can be used just like `equal()` when comparing the value of objects, such that `{ key: value }` is equal to `{ key: value }`. For non-scalar values, identity will be disregarded by `deepEqual`.

`notDeepEqual()` can be used to explicitly test deep, strict inequality.

__Examples__

	QUnit.test('deepEqual test', function(assert) {
	    var obj = {foo: 'bar'};
	    assert.deepEqual(obj, {foo: 'bar'}, 'tow objects can be the same in value');
	});
	
	
#### equal( actual, expected [, message ] )
Description: A non-strict comparison, roughly equivalent to JUnit's assertEquals.

	actual
	Type: Object
	Expression being tested
	
	expected
	Type: Object
	Known comparison value
	
	message
	Type: String
	A short description of the assertion
	
The `equal` assertion uses the simple comparison operator `(==)` to compare the actual and expected arguments. When they are equal, the assertion passes; otherwise, it fails. When it fails, both actual and expected values are displayed in the test result, in addition to a given message.

`notEqual()` can be used to explicitly test inequality.

`strictEqual()` can be used to test strict equality.

__Examples:__

// The simplest assertion example

	QUnit.test('a simplest assertion for equal', function (assert) {
	    assert.equal(1, '1', 'string "1" and number 1 have the same value');
	});

// A slightly more thorough set of assertions:

	QUnit.test('equal test', function (assert) {
	    assert.equal(0, 0, 'zero, zero; equal succeeds');
	    assert.equal('', 0, 'empty, zero; equal succeeds');
	    assert.equal('', '', 'empty, empty; equal succeeds');
	
	    assert.equal('three', 3, 'three, 3; equal fails');
	    assert.equal(null, false, 'null, false; equal fails');
	});
	
	
#### expect(amount)

Description: Specify how many assertions are expected to run within a test.
	
	amount
	Type: Number
	Number of assertions in this test.
	
__Example__

Establish an expected assertion count

	QUnit.test( "a test", function( assert ) {
	  assert.expect( 2 );
	 
	  function calc( x, operation ) {
	    return operation( x );
	  }
	 
	  var result = calc( 2, function( x ) {
	    assert.ok( true, "calc() calls operation function" ); // first
	    return x * x;
	  });
	 
	  assert.equal( result, 4, "2 squared equals 4" ); // second
	});
	

#### notDeepEqual( actual, expected [, message ] )

Description: An inverted deep recursive comparison, working on primitive types, arrays, objects, regular expressions, dates and functions.
	
	actual
	Type: Object
	Object or Expression being tested
	
	expected
	Type: Object
	Known comparison value
	
	message
	Type: String
	A short description of the assertion
	
The `notDeepEqual()` assertion can be used just like `equal()` when comparing the value of objects, such that `{ key: value }` is equal to `{ key: value }`. For non-scalar values, identity will be disregarded by `notDeepEqual`.

`deepEqual()` can be used to explicitly test deep, strict equality.

__Example__

Compare the value of two objects.

	QUnit.test( "notDeepEqual test", function( assert ) {
	  var obj = { foo: "bar" };
	 
	  assert.notDeepEqual( obj, { foo: "bla" }, "Different object, same key, different value, not equal" );
	});
	

#### notEqual( actual, expected [, message ] )

Description: A non-strict comparison, checking for inequality.

	actual
	Type: Object
	Expression being tested
	
	expected
	Type: Object
	Known comparison value
	
	message
	Type: String
	A short description of the assertion
	
The `notEqual` assertion uses the simple inverted comparison operator `(!=)` to compare the actual and expected arguments. When they aren't equal, the assertion passes; otherwise, it fails. When it fails, both actual and expected values are displayed in the test result, in addition to a given message.

__Example:__

The simplest assertion example:

	QUnit.test( "a test", function( assert ) {
	  assert.notEqual( 1, "2", "String '2' and number 1 don't have the same value" );
	});
	


#### notOk( state [, message ] )

Description: A boolean check, inverse of ok() and CommonJS's assert.ok(), and equivalent to JUnit's assertFalse(). Passes if the first argument is falsy.

	state
	Type: Expression
	Expression being tested
	
	message
	Type: String
	A short description of the assertion
	
`notOk()` requires just one argument. If the argument evaluates to false, the assertion passes; otherwise, it fails. If a second message argument is provided, it will be displayed in place of the result.

__Example__

	QUnit.test( "notOk test", function( assert ) {
	  assert.notOk( false, "false succeeds" );
	  assert.notOk( "", "empty string succeeds" );
	  assert.notOk( NaN, "NaN succeeds" );
	  assert.notOk( null, "null succeeds" );
	  assert.notOk( undefined, "undefined succeeds" );
	 
	  assert.notOk( true, "true fails" );
	  assert.notOk( 1, "1 fails" );
	  assert.notOk( "not-empty", "not-empty string fails" );
	});
	
	
#### notPropEqual( actual, expected [, message ] )

	actual
	Type: Object
	Object being tested
	
	expected
	Type: Object
	Known comparison value
	
	message
	Type: String
	A short description of the assertion
	
The `notPropEqual` assertion uses the strict inverted comparison operator `(!==)` to compare the actual and expected arguments as Objects regarding only their properties but not their constructors.

__Example__

Compare the values of two objects properties.

	QUnit.test( "notPropEqual test", function( assert ) {
	  function Foo( x, y, z ) {
	    this.x = x;
	    this.y = y;
	    this.z = z;
	  }
	  Foo.prototype.doA = function () {};
	  Foo.prototype.doB = function () {};
	  Foo.prototype.bar = 'prototype';
	 
	    var foo = new Foo( 1, "2", [] );
	    var bar = new Foo( "1", 2, {} );
	  assert.notPropEqual( foo, bar, "Properties values are strictly compared." );
	});
	

#### notStrictEqual( actual, expected [, message ] ) 
不懂和 `notPropEqual` 有何区别

	actual
	Type: Object
	Expression being tested
	
	expected
	Type: Object
	Known comparison value
	
	message
	Type: String
	A short description of the assertion

__Example__

	QUnit.test( "a test", function( assert ) {
	  assert.notStrictEqual( 1, "1", "String '1' and number 1 have the same value but not the same type" );
	});


	
#### ok( state [, message ] )

Description: A boolean check, equivalent to CommonJS's assert.ok() and JUnit's assertTrue(). Passes if the first argument is truthy.

	state
	Type: Expression
	Expression being tested
	
	message
	Type: String
	A short description of the assertion

__Example__

	QUnit.test( "ok test", function( assert ) {
	  assert.ok( true, "true succeeds" );
	  assert.ok( "non-empty", "non-empty string succeeds" );
	 
	  assert.ok( false, "false fails" );
	  assert.ok( 0, "0 fails" );
	  assert.ok( NaN, "NaN fails" );
	  assert.ok( "", "empty string fails" );
	  assert.ok( null, "null fails" );
	  assert.ok( undefined, "undefined fails" );
	});