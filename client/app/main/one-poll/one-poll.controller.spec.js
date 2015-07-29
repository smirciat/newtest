'use strict';

describe('Controller: OnePollCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var OnePollCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OnePollCtrl = $controller('OnePollCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
