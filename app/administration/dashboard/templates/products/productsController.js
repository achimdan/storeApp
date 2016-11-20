(function(){
    'use strict';

    /**
     * This is a sample controller
     * Generated by ng-appgen Yeomen/Angular generator.
     *
     * @author: Achim Dan
     */
    angular.module('administration').controller('productsCtrl', 
    function($scope, $http, $mdDialog, $controller, productsService, $state) {

        productsService.fetchProducts();
        $scope.cb = {
            getProducts       : productsService.getProducts,
            getTotalElements  : productsService.getTotalElements,
            getTotalPages     : productsService.getTotalPages
        };
        
        $scope.selected = [];

        $scope.query = {
            limit: 10,
            page: 1
        };

        $scope.getPage = function () {
            productsService.pagination($scope.query);
        };

        $scope.showAdvanced = function(ev) {
            $mdDialog.show({
                controller: $controller.addProductCtrl,
                templateUrl: 'administration/dashboard/templates/add-product/add-product.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:false,
                fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            })
            .then(function(answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function() {
                $scope.status = 'You cancelled the dialog.';
            });
        };

        $scope.edit = function  (product) {
            $state.go('dashboard.product',{id: product.id});
        };
    });

})();