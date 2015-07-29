'use strict';

describe('Service: savedpoll', function () {

  // load the service's module
  beforeEach(module('workspaceApp'));

  // instantiate service
  var savedpoll;
  beforeEach(inject(function (_savedpoll_) {
    savedpoll = _savedpoll_;
  }));

  it('should do something', function () {
    expect(!!savedpoll).toBe(true);
  });

});
