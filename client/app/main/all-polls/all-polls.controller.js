'use strict';

angular.module('workspaceApp')
  .controller('AllPollsCtrl', function ($scope, $http, socket, Auth, $location, savedpoll) {
    $scope.allPolls = [];
    $scope.getCurrentUser = Auth.getCurrentUser;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isLoggedInAsync = Auth.isLoggedInAsync;
    
    $http.get('/api/polls').success(function(allPolls) {
      $scope.allPolls = allPolls;
      socket.syncUpdates('polls', $scope.allPolls);
    });

    $scope.showOnePoll = function(poll){
      savedpoll.set(poll);
      $location.path('/one-poll');
    };
    
    
    $scope.deletePoll = function(polls) {
      if ($scope.getCurrentUser()._id===polls.ownerId) $http.delete('/api/polls/' + polls._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('polls');
    });
  });
