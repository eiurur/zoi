'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/index',
      controller: 'MyCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
});
