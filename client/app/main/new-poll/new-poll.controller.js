'use strict';

angular.module('workspaceApp')
  .controller('NewPollCtrl', function ($scope, $http, socket, Auth) {
    $scope.getCurrentUser = Auth.getCurrentUser;
    $scope.newOptions=[{option:""},{option:""}];
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
      var tempResults=[];
      $scope.newOptions.forEach(function(){
        tempResults.push({count:'0'});
      });
      console.log($http.post('/api/polls', { name: $scope.newPoll, 
                                 options: $scope.newOptions, 
                                 ownerId:$scope.getCurrentUser()._id,
                                 results: tempResults,
                                 votedIPs: []
      }));
      $scope.newPoll = '';
      $scope.newOptions=[{option:""},{option:""}];
    };
    console.log($scope.getCurrentUser());
  });
