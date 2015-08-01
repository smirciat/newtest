'use strict';

angular.module('workspaceApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/poll-result', {
        templateUrl: 'app/main/poll-result/poll-result.html',
        controller: 'PollResultCtrl'
      });
  });
