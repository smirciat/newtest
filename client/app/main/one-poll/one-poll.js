'use strict';

angular.module('workspaceApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/one-poll', {
        templateUrl: 'app/main/one-poll/one-poll.html',
        controller: 'OnePollCtrl'
      });
  });
