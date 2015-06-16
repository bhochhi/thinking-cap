(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$q'];

    /* @ngInject */
    function dataservice($http, $q) {

        var service = {};

        return service;

        function success(response) {
            return response.data;
        }

        function fail(error, type) {
            var msg = 'query for ' + type + ' failed. ' + error.data.description;
            return $q.reject(msg);
        }
    }
})();
