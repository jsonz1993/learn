/**
 * Created by Administrator on 2016/10/9.
 */

/*
 *  async
 */

// Tell QUnit to wait for the done() call inside the timeout.
QUnit.test('assert.async() test', function (assert) {
    var done = assert.async(),
        input = $('#test-input').focus();
    setTimeout(function () {
        assert.equal(document.activeElement, input[0], 'input was focused');
        done();
    }, 1000)
});

// Call assert.async() for each operation. Each done callback can be called at most once.
QUnit.test('two async calls', function (assert) {
    assert.expect(2);

    var done1 = assert.async(),
        done2 = assert.async();
    setTimeout(function () {
        assert.ok(true, 'test resumed form async operation 1');
        done1();
    }, 500);
    setTimeout(function () {
        assert.ok(true, 'test resumed form async operation 1');
        done2();
    }, 150)
});

// Set up an async test three exit points. Each done() call adds up to the acceptCallCount. After three calls, the test is done.
QUnit.test('multiple call done()', function (assert) {
    assert.expect(3);
    var done = assert.async(3);
    setTimeout(function () {
        assert.ok(true, "first call done.");
        done();
    }, 500);

    setTimeout(function () {
        assert.ok(true, "second call done.");
        done();
    }, 500);

    setTimeout(function () {
        assert.ok(true, "third call done.");
        done();
    }, 500);
});

/**
 * deepEqual deepEqual( actual, expected [, message ] )
 * Description: A deep recursive comparison, working on primitive types, arrays, objects, regular expressions, dates and functions.
 */

QUnit.test('deepEqual test', function (assert) {
    var obj = {foo: 'bar'};
    assert.deepEqual(obj, {foo: 'bar'}, 'tow objects can be the same in value');
});

/**
 * equal( actual, expected [, message ] )
 * Description: A non-strict comparison, roughly equivalent to JUnit's assertEquals.
 */

// The simplest assertion example
QUnit.test('a simplest assertion for equal', function (assert) {
    assert.equal(1, '1', 'string "1" and number 1 have the same value');
});

// A slightly more thorough set of assertions:
QUnit.test('equal test', function (assert) {
    assert.equal(0, 0, 'zero, zero; equal succeeds');
    assert.equal('', 0, 'empty, zero; equal succeeds');
    assert.equal('', '', 'empty, empty; equal succeeds');

    // 下面报错的不跑
    //assert.equal('three', 3, 'three, 3; equal fails');
    //assert.equal(null, false, 'null, false; equal fails');
});


/**
 * expect( amount )
 * Description: Specify how many assertions are expected to run within a test.
 */

// Establish an expected assertion count
QUnit.test('expect test', function (assert) {
    assert.expect(2);

    function calc(x, operation) {
        return operation(x);
    }

    var result = calc(3, function (x) {
        assert.ok(true, 'calc() calls operation function'); // first
        return x * x;
    });

    assert.equal(result, 9, '3 squared equals 9'); // second
});


/**
 * notDeepEqual(actual, expected [,message])
 * Description: An inverted deep recursive comparison, working on primitive types, arrays, objects, regular expressions, dates and functions.
 */

// Compare the value of two objects.
QUnit.test('notDeepEqual test', function (assert) {
    var obj = {foo: 'bar'};

    assert.notDeepEqual(obj, {foo: 'lar'}, 'Different object, same key, different value, not equal');
});


/**
 * notEqual( actual, expected [, message ] )
 * Description: A non-strict comparison, checking for inequality.
 */

// The simplest assertion example
QUnit.test('notEqual test', function (assert) {
    assert.notEqual(1, '2', 'String "2" and number 1 don\'t have the same value');
});


/**
 * notOk( state [, message ] )
 * Description: A boolean check, inverse of ok() and CommonJS's assert.ok(), and equivalent to JUnit's assertFalse(). Passes if the first argument is false.
 */

QUnit.test('notOk test', function (assert) {
    assert.notOk(false, 'false succeeds');
    assert.notOk('', 'empty string succeeds');
    assert.notOk(NaN, 'NaN succeeds');
    assert.notOk(null, 'null succeeds');

    // 忽略
    //assert.notOk(true, 'true fails');
    //assert.notOk(1, '1 fails');
    //assert.notOk('not-empty', 'not-empty string fails');
});


/**
 * notPropEqual( actual, expected [, message ] )
 * Description: A strict comparison of an object's own properties, checking for inequality.
 */

// compare the values of two objects properties
QUnit.test('notPropEqual test', function (assert) {
    function Foo(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Foo.prototype.doA = function() {};
    Foo.prototype.doB = function() {};
    Foo.prototype.bar = 'prototype';

    var foo = new Foo(1, '2', []),
        bar = new Foo('1', 2, {});

    assert.notPropEqual(foo, bar, 'Properties values are strictly compared.');

});





