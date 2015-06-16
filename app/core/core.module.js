(function() {
    'use strict';

    angular
        .module('app.core', [
          'ngRoute',
          'ngAnimate'
        ])
        .constant('VERSION', '1.0.0');
})();
