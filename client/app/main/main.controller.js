'use strict';


angular.module('workspaceApp')
  
  
  .controller('MainCtrl', function ($scope, $http, socket, Auth) {
    $scope.allPolls = [];
    $scope.getCurrentUser = Auth.getCurrentUser;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isLoggedInAsync = Auth.isLoggedInAsync;
    
    $http.get('/api/polls').success(function(allPolls) {
      $scope.allPolls = allPolls;
      socket.syncUpdates('polls', $scope.allPolls);
    });

    
    
    
    $scope.deletePoll = function(polls) {
      if ($scope.getCurrentUser()._id===polls.ownerId) $http.delete('/api/polls/' + polls._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('polls');
    });
    
    //console.log($scope.getCurrentUser()._id);
    
  });

