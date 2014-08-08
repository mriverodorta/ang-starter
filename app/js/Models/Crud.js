/**
 * Created by Maikel Rivero Dorta mriverodorta@gmail.com on 7/08/14.
 */
'use strict';

angular.module('AngStarter')
.factory('Crud', ['$http', function($http) {
    function Crud(data) {
        // Define object properties here
        this._http = $http;
    };
    Crud.prototype = {
        setData: function(data) {
            // Do something
        },
        load: function(id) {
            // Load data with this._http
        },
        delete: function() {
            // Make a delete request with this._http
        },
        update: function() {
            // Make an update request with this._http
        },
        all: function() {
            // Make get all request with this._http
        }
    };
    return Crud;
}]);
