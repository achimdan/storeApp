(function(){
    'use strict';

    /**
     * This is a sample controller spec
     * Generated by ng-appgen Yeomen/Angular generator.
     *
     * @author: Tapas Jena
     * @copyright: Anitech Consulting Services Pvt Ltd.
     */
    describe('category', function() {

        var scope, ctrl;

        beforeEach(function() {
            module('administration');

            inject(function($rootScope, $controller) {
                scope = $rootScope.$new();
                ctrl = $controller('category', {$scope: scope});
            });
        });

        it('should ...', function() {

            //TODO: Implement your controller spec logic here
            //expect(ctrl.doSomething()).toEqual('something');

        });

    });

})();
