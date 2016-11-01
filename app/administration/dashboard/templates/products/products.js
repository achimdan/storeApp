(function(){
    'use strict';

    /**
     * This is a sample controller
     * Generated by ng-appgen Yeomen/Angular generator.
     *
     * @author: Achim Dan
     */
    angular.module('administration').controller('productsCtrl', function($scope,$http) {

        $scope.query = {
            order: 'name',
            limit: 5,
            page: 1
        };

        var errorCallback =  function (error) {
			console.log(error);
        };

        var successCallback =  function (response) {
          	$scope.desserts = response.data.content;
          	$scope.desserts.totalElements = response.data.totalElements;
          	$scope.desserts.totalPages = response.data.totalPages;
          	console.log('$scope.desserts',$scope.desserts);
        };

        var get = function () {
            var url = 'http://77.81.178.198:25001/onlineShop/products?page=' + ($scope.query.page - 1) + '&size=' + $scope.query.limit;
			$http.get(url).then(successCallback,errorCallback);
        };
        get();
        
        $scope.selected = [];

        function success(desserts) {
          //$scope.desserts = desserts;
        }

        $scope.getDesserts = function () {
          // $scope.promise = $nutrition.desserts.get($scope.query, success).$promise;
          	get();
        };

    });

})();