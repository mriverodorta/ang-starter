'use strict';
angular.module('AngStarter')
.directive('year', [function() {
    return function(scope, elm, attrs) {
        var year = new Date();
      elm.text(' ' + year.getFullYear());
    };
  }]);