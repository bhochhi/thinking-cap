(function(){
    'use strict';

    angular
        .module('app.navigation', [])
        .controller('NavigationController', NavigationController);

    NavigationController.$inject = ['$scope', '$location', '$window'];

    function NavigationController($scope, $location, $window) {

        $scope.isActive = function(path) {
            return $location.path() == path;
        }

        $scope.goHome = function(){
            $location.path('/');
        };

        $scope.goCountries = function(){
            $location.path('/countries');
        };

        $scope.goBack = function(){
            $window.history.back();
        };

        $scope.sayHello = function() {
            return "Hello!";
        };

    }


}());