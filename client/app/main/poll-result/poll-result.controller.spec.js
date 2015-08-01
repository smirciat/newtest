'use strict';

describe('Controller: PollResultCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var PollResultCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PollResultCtrl = $controller('PollResultCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
