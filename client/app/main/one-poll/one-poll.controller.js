'use strict';

angular.module('workspaceApp')
  .controller('OnePollCtrl', function ($http,$scope,savedpoll,$location,$routeParams, Auth) {
    console.log($routeParams.id);
    $scope.poll= savedpoll.get();
    $scope.url=$location.absUrl() + '\/' + $scope.poll._id;
    $scope.chosenOption="" ;
    $scope.clientIP=undefined;
    $scope.isShowNewOption=false;
    $scope.newOption='';
    $http.get('/api/polls/ip').success(function(ip) {
      $scope.clientIP = ip;
    });
    $scope.getCurrentUser=Auth.getCurrentUser;
    $scope.isOwned = ($scope.getCurrentUser()._id===$scope.poll.ownerId);
    if ($routeParams.id) $http.get('/api/polls/'+$routeParams.id).success(function(poll) {
      $scope.poll = poll;
      savedpoll.set($scope.poll);
      $scope.url=$location.absUrl();
    });
    $scope.toggleOption=function(){
      $scope.isShowNewOption=!$scope.isShowNewOption;
    };
    $scope.updateOptions=function(){
      if ($scope.newOption==='') return;
      $scope.poll.options.push({option:$scope.newOption, index:$scope.poll.options.length});
      $scope.poll.results.push({count:'0'});
      $http.put('/api/polls/' + $scope.poll._id, $scope.poll);
      savedpoll.set($scope.poll);
      $location.path('/one-poll/' + $scope.poll._id);
    };
    $scope.recordVote=function(optionIndex){
      //check if this IP has already voted
      //$scope.clientIP='0.0.0.0';
      for (var i=0;i<$scope.poll.votedIPs.length;i++){
        if ($scope.poll.votedIPs[i].IP==$scope.clientIP) {
          alert('This poll has already received a vote from this IP Address.  Here are the results of this poll:');
          $location.path('/poll-result');
          return;
        }
      };
      
      //update vote
      $scope.poll.results[optionIndex].count++;
      $scope.poll.votedIPs.push({IP:$scope.clientIP});
      $http.put('/api/polls/' + $scope.poll._id, $scope.poll);
      savedpoll.set($scope.poll);
      $location.path('/poll-result');
    };
  });
