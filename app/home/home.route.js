(function() {
    'use strict';

    angular
        .module('app.home')
        .config(appRun);

    appRun.$inject = ['$routeProvider'];

    /* @ngInject */
    function appRun($routeProvider) {
        $routeProvider.when("/", {
          templateUrl : "./home/home.html",
          controller : 'HomeController'
        });
    }
})();
