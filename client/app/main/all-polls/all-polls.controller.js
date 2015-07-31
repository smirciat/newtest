'use strict';

angular.module('workspaceApp')
  .controller('AllPollsCtrl', function ($scope, $http, socket, Auth) {
    
    $scope.getCurrentUser=Auth.getCurrentUser;
    $scope.allPolls = [];
    $scope.showMine=false;
    $http.get('/api/polls').success(function(allPolls) {
      $scope.allPolls = allPolls;
      socket.syncUpdates('polls', $scope.allPolls);
      $scope.filteredPolls=$scope.allPolls.slice(0);
    });
    var mine = function(poll){
        return ($scope.getCurrentUser()._id===poll.ownerId);
    };
    
    Chart.defaults.global.colours = [
    
    '#FDB45C', // yellow
    '#F7464A', // red
    '#97BBCD', // blue
    '#46BFBD', // green
    '#949FB1', // grey
    '#4D5360',  // dark grey
    '#DCDCDC' // light grey
    ];
    
    $scope.toggle=function(){
      $scope.showMine=!$scope.showMine;
      if ($scope.showMine) $scope.filteredPolls=$scope.allPolls.filter(mine);
      else $scope.filteredPolls=$scope.allPolls.slice(0);
    };
    
  })
  
  .controller('InnerCtrl', function ($scope, savedpoll, $location, $http, socket, Auth){
     $scope.getCurrentUser=Auth.getCurrentUser;
     $scope.labels=[];
     $scope.data=[];
    $scope.getData = function(poll){
      for (var i=0;i<poll.results.length;i++){
        $scope.data.push(poll.results[i].count);
        $scope.labels.push(poll.options[i].option);
      };
    };
    $scope.showOnePoll = function(poll){
      savedpoll.set(poll);
      $location.path('/one-poll');
    };
    $scope.deletePoll = function(poll) {
      if ($scope.getCurrentUser()._id===poll.ownerId) {
        if (prompt("Are you sure you want to permanently delete this poll? (y/n)")==='y') $http.delete('/api/polls/' + poll._id);
      }
      else alert("You have to be the creator of the poll to delete it.");
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('polls');
    });
  });
