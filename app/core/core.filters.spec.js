describe("app.core filters", function() {
    beforeEach(module("app.core"));

    describe("humanNumber", function() {
        it('should comma separate thousandths', inject(function($filter) {
            var humanNumber = $filter("humanNumber");
            expect(humanNumber(10000)).toEqual('10,000');
        }));
    });

    describe("slugify", function() {
        it('make a string url-friendly', inject(function($filter) {
            var slugify = $filter("slugify");
            expect(slugify('THOSE ARE THE breaks')).toEqual('those-are-the-breaks');
        }));
    });

});