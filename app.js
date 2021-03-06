/* global angular */
angular.module('app', ['ngRoute'])

.controller('NavController', function ($scope, $route, $location) {
  $scope.isActive = function (href) {
    console.log('location: ', $location.url())
    if (href === $location.url()) return 'active'
    else return ''
  }

  $scope.contributors = [
    { name: 'Tom', link: 'http://github.com/indietom' },
    { name: 'Johannes', link: 'http://github.com/johannes-larsson' }
  ]
})

.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
  //.when('/documentation', { templateUrl: 'views/docs.html' })
  .when('/home', { templateUrl: 'views/home.html' })
  .when('/about', { templateUrl: 'views/about.html' })
  .when('/blog', { templateUrl: 'views/blog.html'})
  .otherwise('/home')

  // $locationProvider.html5Mode({enabled: true, requireBase: false});
}])
