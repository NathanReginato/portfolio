(function() {
  'use strict'

  angular.module('portfolio', ['ngAnimate', 'ui.router'])
  .config(setupRoutes);

  setupRoutes.$inject = [
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
  ];

  function setupRoutes($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");

    $stateProvider
    .state('projects', {
      url: "/",
      templateUrl: 'partials/projects.html'
    })
    .state('about', {
      url: "/about",
      templateUrl: 'partials/about.html'
    })
    .state('contact', {
      url: "/contact",
      templateUrl: 'partials/contact.html'
    })
  }
})();
