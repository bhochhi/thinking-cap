(function(){
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope'];

    function HomeController($scope) {
        $scope.pageClass = "home";
        $scope.content = "What an epic homepage!";
    }
}());
