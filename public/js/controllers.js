'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('AppCtrl', ['$scope', 'NewGameService', function ($scope, NewGameService) {
    $scope.click = function() {
        $scope.isOpened = !$scope.isOpened;
    }
    $scope.items = NewGameService.items;
  }])
  .controller('MyCtrl', function ($scope) {
    //
  });