'use strict';

angular.module('workspaceApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/all-polls', {
        templateUrl: 'app/main/all-polls/all-polls.html',
        controller: 'AllPollsCtrl'
      });
  });
