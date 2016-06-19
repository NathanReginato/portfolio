(function() {
  'use strict'

  angular.module('portfolio')
  .directive('myHeader', directive);

  function directive() {
    return {
      scope: { },
      restrict: 'E',
      templateUrl: 'partials/header.html',
      controller: controller,
      controllerAs: 'vm',
    }
  }

  controller.$inject = []

  function controller() {
    let vm = this
    vm.menu = true;
  }

})();
