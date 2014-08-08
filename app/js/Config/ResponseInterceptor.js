/**
 * Created by Maikel Rivero Dorta mriverodorta@gmail.com on 7/08/14.
 */
"use strict";
angular.module('AngStarter')
    .factory('ResponseInterceptor', ['$location', '$q', function($location, $q) {

        /**
         * Configure the Response Interceptor here
         */        
        
        var responseInterceptor = function() {
            var success = function(response) {
                return response;
            };

            var error = function(response) {
                if(response.status === 401) {
                    $location.path('/unautorized');
                }
                return $q.reject(response);
            };

            return function(promise) {
                return promise.then(success, error);
            };
        };

        return responseInterceptor;
    }]);
