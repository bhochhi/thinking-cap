(function() {
    'use strict';

    angular
        .module('app.core')
        .filter('humanNumber', function() {
            return function(input) {
                if (input !== undefined) {
                    return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }
            }
        })
        .filter('slugify', function() {
            return function(input, sub) {
                var replace = (sub == undefined) ? '-' : sub;
                return (typeof input == 'string') ? input.toLowerCase().replace(/\s+/g, replace) : input;
            }
        });
})();
