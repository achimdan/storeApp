(function(){
    'use strict';

    /**
     * This is a sample controller
     * Generated by ng-appgen Yeomen/Angular generator.
     *
     * @author: Tapas Jena
     * @copyright: Anitech Consulting Services Pvt Ltd.
     */
    angular.module('home').controller('homeCtrl', function($scope, homeService) {

        // get message from service
        $scope.message = homeService.getMessage();

    });

})();
