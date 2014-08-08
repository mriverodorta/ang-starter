/**
 * Created by Maikel Rivero Dorta mriverodorta@gmail.com on 7/08/14.
 */
'use strict';
angular.module('AngStarter')
.run(['$rootScope', '$location', 'Auth', function ($rootScope, $location, Auth) {

    /**
     * Configure your app security here
     */
    /*var securedRoutes = ['/login'];
    $rootScope.$on('$routeChangeStart', function(event, next, current){
        if (!_(securedRoutes).contains($location.path()) && !Auth.check()) {
            $location.path('/login');
        };
    });*/
}]);
