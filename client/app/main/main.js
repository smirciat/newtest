'use strict';

angular.module('workspaceApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      
      .when('/new-poll', {
        templateUrl: 'app/main/new-poll/new-poll.html',
        controller: 'NewPollCtrl'
      })
      
      .when('/one-poll', {
        templateUrl: 'app/main/one-poll/one-poll.html',
        controller: 'OnePollCtrl'
      })
    
      .when('/all-polls', {
        templateUrl: 'app/main/all-polls/all-polls.html',
        controller: 'AllPollsCtrl'
    })
    
      ;
  });

