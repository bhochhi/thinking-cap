describe("app.navigation", function() {
    beforeEach(module('app.navigation'));
    describe('NavigationController', function() {
        var ctrl, scope;
        beforeEach(inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            ctrl = $controller('NavigationController', {
                $scope : scope
            });
        }));

        it('should say hello', function() {
            expect(scope.sayHello()).toBe("Hello!");
        });
    });
});