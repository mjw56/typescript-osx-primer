var helper = require('../src/components/helper.js'),
    helperMock;

describe('helper class', function() {

  it('should have a sayHello method', function() {
    helperMock = new helper('hello')

    expect(helperMock.sayHello).toBeDefined();
  });

})
