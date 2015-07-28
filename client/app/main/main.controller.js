'use strict';

angular.module('workspaceApp')
  .controller('MainCtrl', function ($scope, $http, socket, Auth) {
    $scope.allPolls = [];
    $scope.getCurrentUser = Auth.getCurrentUser;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isLoggedInAsync = Auth.isLoggedInAsync;
    $scope.newOptions=[{option:""},{option:""}];
    $http.get('/api/polls').success(function(allPolls) {
      $scope.allPolls = allPolls;
      socket.syncUpdates('polls', $scope.allPolls);
    });

    $scope.addOption = function(){
      $scope.newOptions.push({option:""});
    };
    $scope.delOption = function(){
      $scope.newOptions.pop();
    };
    $scope.addPoll = function() {
      if($scope.newPoll === '') {
        return;
      }
      $http.post('/api/polls', { name: $scope.newPoll, options: $scope.newOptions});
      $scope.newPoll = '';
      $scope.newOptions=[{option:"First Option"},{option:"Second Option"}];
    };
    
    
    $scope.deletePoll = function(polls) {
      $http.delete('/api/polls/' + polls._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('polls');
    });
    
    //console.log($scope.getCurrentUser().name);
    
  });
