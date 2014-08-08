/**
 * Created by Maikel Rivero Dorta mriverodorta@gmail.com on 7/08/14.
 */
'use strict';
angular.module('AngStarter')
.filter('word', function() {
    return function(input) {
        input = input || '';
        var out = "";
        var words = input.split(' ');
        return words[0];
  };
})