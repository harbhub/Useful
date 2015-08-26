//Run this test using the following command:
//> mocha MochaUnitTest.js
console.log('Start the Unit Test');
var assert = require('assert');

function hello() {
	return 'hello world';
}

describe('#hello', function () {
	it('should return "hello world"', function () {
		assert.equal(hello(), 'hello world');
	})
});

describe('#hello asynchronous', function () {
	//Increases the maximum Mocha time out from the default of 2000ms to 10000ms for this test
	this.timeout(10000);
	it('should return "hello world asynchronously"', function (done) {
		setTimeout(function() {
			assert.equal(hello(), 'hello world');
			done();
		}, 3000);
	})
});

describe('hooks', function() {

  before(function() {
    //Runs before all tests in this block
	console.log('before');
  });

  after(function() {
    //Runs after all tests in this block
	console.log('after');
  });

  beforeEach(function() {
    //Runs before each test in this block
	console.log('beforeEach');
  });

  afterEach(function() {
    //Runs after each test in this block
	console.log('afterEach');
  });

  //Test Cases
  it('should return "hello world" while running the hook functions', function () {
	  assert.equal(hello(), 'hello world');
  });
  
  it('should not return "hello world wrong" while running the hook functions for this second test case', function () {
	  assert.notEqual(hello(), 'hello world wrong');
  });
  
  it('should return "hello world" while running the hook functions for this third test case', function () {
	  assert.equal(hello(), 'hello world');
  });
});



