'use strict';

(function () {
  'use strict';

  angular.module('portfolio', ['ngAnimate', 'ui.router']).config(setupRoutes);

  setupRoutes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function setupRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");

    $stateProvider.state('projects', {
      url: "/",
      templateUrl: 'partials/projects.html'
    }).state('about', {
      url: "/about",
      templateUrl: 'partials/about.html'
    }).state('contact', {
      url: "/contact",
      templateUrl: 'partials/contact.html'
    });
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('portfolio').directive('myCover', directive);

  function directive() {
    return {
      scope: {},
      restrict: 'E',
      templateUrl: 'partials/cover.html',
      controller: controller,
      controllerAs: 'vm'
    };
  }

  controller.$inject = ['$scope'];

  function controller($scope) {
    var vm = this;
    vm.hide = false;
    vm.iconsArray = icons.sort(function () {
      return 0.5 - Math.random();
    });
    vm.shuffle = function () {
      setTimeout(function () {
        icons.unshift(icons.pop());
        $scope.$apply();
        vm.shuffle();
      }, 5000);
    };
    vm.shuffle();
  }

  var icons = ['github_alt', 'git', 'atom', 'chrome', 'apple', 'npm', 'ubuntu', 'bower', 'gulp', 'css3_full', 'html5', 'nodejs_small', 'javascript_shield', 'angular', 'database', 'javascript', 'git_branch', 'markdown', 'bootstrap', 'sass'];
})();
'use strict';

(function () {
  'use strict';

  angular.module('portfolio').directive('myHeader', directive);

  function directive() {
    return {
      scope: {},
      restrict: 'E',
      templateUrl: 'partials/header.html',
      controller: controller,
      controllerAs: 'vm'
    };
  }

  controller.$inject = [];

  function controller() {
    var vm = this;
    vm.menu = true;
  }
})();