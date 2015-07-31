'use strict';

angular.module('workspaceApp')
  .controller('NewPollCtrl', function ($scope, $http, socket, Auth) {
    $scope.getCurrentUser = Auth.getCurrentUser;
    $scope.newOptions=[{option:"", index:"0"},{option:"",index:"1"}];
    $scope.addOption = function(){
      $scope.newOptions.push({option:"", index:$scope.newOptions.length});
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
      $http.post('/api/polls', { name: $scope.newPoll, 
                                 options: $scope.newOptions, 
                                 ownerId:$scope.getCurrentUser()._id,
                                 results: tempResults,
                                 votedIPs: []
      });
      $scope.newPoll = '';
      $scope.newOptions=[{option:"", index:"0"},{option:"",index:"1"}];
    };
    console.log($scope.getCurrentUser());
  });
