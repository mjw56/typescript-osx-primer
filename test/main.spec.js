var main = require('../src/components/main.js'),
    mainMock;

describe('main class', function() {

  it('should set a name on main class', function() {
    mainMock = new main('hello')

    expect(mainMock.name).toEqual('hello')
  });

})
