(function() {
  'use strict'

  angular.module('portfolio')
  .directive('myCover', directive);

  function directive() {
    return {
      scope: { },
      restrict: 'E',
      templateUrl: 'partials/cover.html',
      controller: controller,
      controllerAs: 'vm',
    }
  }

  controller.$inject = ['$scope']

  function controller($scope) {
    let vm = this;
    vm.hide = false
    vm.iconsArray = icons.sort(function() { return 0.5 - Math.random() });
    vm.shuffle = function() {
      setTimeout(function() {
        icons.unshift(icons.pop())
        $scope.$apply()
        vm.shuffle()
      }, 5000)
    }
    vm.shuffle()
  }

  let icons = [
    'github_alt',
    'git',
    'atom',
    'chrome',
    'apple',
    'npm',
    'ubuntu',
    'bower',
    'gulp',
    'css3_full',
    'html5',
    'nodejs_small',
    'javascript_shield',
    'angular',
    'database',
    'javascript',
    'git_branch',
    'markdown',
    'bootstrap',
    'sass'
  ]

})();
