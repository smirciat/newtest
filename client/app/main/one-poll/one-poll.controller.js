'use strict';

angular.module('workspaceApp')
  .controller('OnePollCtrl', function ($http,$scope,savedpoll,$location) {
    var poll= savedpoll.get();
    $scope.name=poll.name;
    $scope.options = poll.options;//array of option
    $scope.ips = poll.votedIPs;//array of IP
    $scope.results = poll.results;//array of count
    $scope.id= poll._id;
    $scope.chosenOption="" ;
    $scope.clientIP=undefined;
    $http.get('/api/polls/ip').success(function(ip) {
      $scope.clientIP = ip;
    });
    
    $scope.recordVote=function(optionIndex){
      //check if this IP has already voted
      //$scope.clientIP='0.0.0.0';
      for (var i=0;i<$scope.ips.length;i++){
        if ($scope.ips[i].IP==$scope.clientIP) {
          alert('This poll has already received a vote from this IP Address.  Here are the results of this poll:');
          $location.path('/poll-result');
          return;
        }
      };
      
      //update vote
      poll.results[optionIndex].count++;
      poll.votedIPs.push({IP:$scope.clientIP});
      $http.put('/api/polls/' + poll._id, poll);
      savedpoll.set(poll);
      $location.path('/poll-result');
    };
  });
