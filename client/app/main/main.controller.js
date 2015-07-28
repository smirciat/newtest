'use strict';

angular.module('workspaceApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.allPolls = [];

    $http.get('/api/polls').success(function(allPolls) {
      $scope.allPolls = allPolls;
      socket.syncUpdates('polls', $scope.allPolls);
    });

    $scope.addPoll = function() {
      if($scope.newPoll === '') {
        return;
      }
      $http.post('/api/polls', { name: $scope.newPoll, options:[{option:$scope.newPollOption0},{option:$scope.newPollOption1}] });
      $scope.newPoll = '';
      $scope.newPollOption0='';
      $scope.newPollOption1='';
    };

    $scope.deletePoll = function(polls) {
      $http.delete('/api/polls/' + polls._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('polls');
    });
    
    //console.log($scope.user.name);
  });
