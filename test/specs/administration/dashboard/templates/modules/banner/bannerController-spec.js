(function(){
    'use strict';

    /**
     * This is a sample controller spec
     * Generated by ng-appgen Yeomen/Angular generator.
     *
     * @author: Tapas Jena
     * @copyright: Anitech Consulting Services Pvt Ltd.
     */
    describe('bannerController', function() {

        var scope, ctrl;

        beforeEach(function() {
            module('administration');

            inject(function($rootScope, $controller) {
                scope = $rootScope.$new();
                ctrl = $controller('bannerController', {$scope: scope});
            });
        });

        it('should ...', function() {

            //TODO: Implement your controller spec logic here
            //expect(ctrl.doSomething()).toEqual('something');

        });

    });

})();