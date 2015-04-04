var hn = require('../src/components/hn.js'),
    hnMock;

describe('hn class', function() {

  beforeEach(function() {
    var firebaseSpy = jasmine.createSpyObj('firebase', ['child', 'once']);
    
    hnMock = {
      firebase: firebaseSpy,
      _getTopHN: function() {}
    }
  })

  it('should have a get top hn method', function() {
    expect(hnMock._getTopHN).toBeDefined();
  });

})
