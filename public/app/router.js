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
    .state('home', {
      url: "/",
      template: '<h1>Home</h1><a ui-sref="projects">click</a><div ui-view></div>'
    })
    .state('projects', {
      parent: 'home',
      url: "projects",
      template: "<h1>yayya</h1>"
    })
  }
})();
