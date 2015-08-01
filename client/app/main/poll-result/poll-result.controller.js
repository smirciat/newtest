'use strict';

angular.module('workspaceApp')
  .controller('PollResultCtrl', function ($scope, savedpoll) {
  $scope.poll=savedpoll.get();
  $scope.labels = [];
  for (var i=0;i<$scope.poll.options.length;i++){
    $scope.labels.push($scope.poll.options[i].option);
  };
  $scope.data = [];
  for (var i=0;i<$scope.poll.results.length;i++){
    $scope.data.push($scope.poll.results[i].count);
  };
});
