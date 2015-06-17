(function(){
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController)
        .factory('TwitterService', TwitterService)
        .constant('API_ROOT', 'http://localhost:3000');

    HomeController.$inject = ['$scope'];
    TwitterService.$inject = ['$http', '$q', 'API_ROOT'];

    function HomeController($scope, TwitterService) {
        $scope.pageClass = "home";
        $scope.content = "";

        $scope.getTrends = function(){
          TwitterService.getTrends()
            .then(function(data){
              $scope.trends = JSON.parse(data.result.trendData);
              console.log($scope.trends);
            })
            .catch(function(error){
              console.error('problems', error);
              $scope.twitterErrors = error.error;
            })
        };

        $scope.getUser = function(username){
          console.log("username entered ", username);
          TwitterService.getUser(username)
              .then(function(data){
                  $scope.twitterErrors = undefined;
                  $scope.results = JSON.parse(data.result.userData);
              })
              .catch(function(error){
                  console.error('there was an error retrieving data: ', error);
                  $scope.twitterErrors = error.error;
              })
        };
    }

    function TwitterService($http, $q, API_ROOT) {

      var getTrends = function(){
        var d = $q.defer();
        $http.get(API_ROOT + '/twitter/trends')
          .success(function(data){
            return d.resolve(data);
          })
          .error(function(error){
            return d.reject(error);
          });
        return d.promise;
      };

      var getUser = function(username){
        var d = $q.defer();
        $http.post(API_ROOT + '/twitter/user', {username : username})
          .success(function(data){
            return d.resolve(data);
          })
          .error(function(error){
            return d.reject(error);
          });
        return d.promise;
      };

      return {
        getTrends : getTrends,
        getUser : getUser
      }
    }


}());
