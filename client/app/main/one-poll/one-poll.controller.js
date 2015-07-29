'use strict';

angular.module('workspaceApp')
  .controller('OnePollCtrl', function ($scope,savedpoll) {
    var poll= savedpoll.get();
    //console.log(poll);
    $scope.name=poll.name;
    $scope.options = poll.options;//array of option
    $scope.ips = poll.votedIps;//array of IP
    $scope.results = poll.results;//array of count
    $scope.id= poll._id;
    $scope.chosenOption="" ;
  });
