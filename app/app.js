(function() {
    'use strict';

    angular
        .module('app', [
            'app.core',
            'app.home'
        ])
        .run(['$rootScope', '$location', '$timeout', function($rootScope, $location, $timeout) {
            $rootScope.$on('$routeChangeError', function() {
                $location.path("/error");
            });
            $rootScope.$on('$routeChangeStart', function() {
                $rootScope.isLoading = true;
            });
            $rootScope.$on('$routeChangeSuccess', function() {
                $timeout(function() {
                    $rootScope.isLoading = false;
                }, 1000);
            });
        }])
        .config(function($locationProvider, $routeProvider) {
            // $locationProvider.hashPrefix('!');
            $routeProvider.otherwise({
                redirectTo: '/'
            });
        });

}());
