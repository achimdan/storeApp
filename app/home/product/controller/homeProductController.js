(function(){
    'use strict';

    /**
     * This is a sample controller
     * Generated by ng-appgen Yeomen/Angular generator.
     *
     * @author: Achim Dan
     */

    angular.module('home').controller('homeProductController', function($scope, $http, $stateParams, $uibModal, Config, homeProductService, homeProductModel) {
        
        // homeProductService.fetchProduct($stateParams);
        $scope.cb = {
            // getProduct      : homeProductService.getProduct,
            // getThumbnails   : homeProductService.getThumbnails,
            // hoverThumbnails : homeProductService.hoverThumbnails,
            // getBigImagine   : homeProductService.getBigImagine,
            openModalImages : homeProductService.openModalImages
        };

        // homeProductService.fetchProduct($stateParams);

        var getTheProduct = function () {
            $scope.bigImage = [];
            homeProductModel.fetchProduct($stateParams.id).then(function(success){
                $scope.product = success.data;
                _.forEach(success.data.images,function(eachImage){
                    var splitImage = eachImage.src.split('thumbnail.');
                    var joinImage = splitImage.join('');
                    $scope.bigImage.push(joinImage);
                    console.log($scope.bigImage);
                    $scope.hoveredImage = $scope.bigImage[0];
                    $scope.allImages = $scope.bigImage;
                    // $scope.bigImage.push(eachImage.srcBig);
                    // $scope.hoveredImage = $scope.bigImage[0];
                    // $scope.allImages = $scope.bigImage;
                });
                console.log(success.data);
            });
        };
        getTheProduct();

        $scope.hover = function (images) {
            $scope.hoveredImage = images;
        };
        // $scope.click = function (thumb,bigImage) {
        //     var modalInstance = $uibModal.open({
        //         // animation: $ctrl.animationsEnabled,
        //         ariaLabelledBy: 'modal-title',
        //         ariaDescribedBy: 'modal-body',
        //         templateUrl: 'home/product/templates/image-modal.html',
        //         controller: 'imageModalController',
        //         size: 'lg',
        //         resolve: {
        //             items: function () {
        //                 return {
        //                     thumb: thumb,
        //                     bigImage: bigImage
        //                 };
        //             }
        //         }
        //     });

        //     modalInstance.result.then(function (selectedItem) {
        //         // $ctrl.selected = selectedItem;
        //     }, function () {
        //         // $log.info('Modal dismissed at: ' + new Date());
        //     });
        // };


        // var getProductPage = function () {
        //     var url = Config + 'products/' + $stateParams.id;
        //     $scope.bigImage = [];
        //     $http.get(url).then(function(success){
        //         $scope.product = success.data;
        //         _.forEach(success.data.images,function(eachImage){
        //             var splitImage = eachImage.src.split('thumbnail.');
        //             var joinImage = splitImage.join('');
        //             $scope.bigImage.push(joinImage);
        //             console.log($scope.bigImage);
        //             $scope.hoveredImage = $scope.bigImage[0];
        //             $scope.allImages = $scope.bigImage;
        //         });
        //     });
        // };
        // getProductPage();

        // $scope.hover = function (images) {
        //     $scope.hoveredImage = images;
        //     console.log($scope.hoveredImage);
        // };
        // $scope.click = function (thumb,bigImage) {
        //     var modalInstance = $uibModal.open({
        //         // animation: $ctrl.animationsEnabled,
        //         ariaLabelledBy: 'modal-title',
        //         ariaDescribedBy: 'modal-body',
        //         templateUrl: 'home/product/templates/image-modal.html',
        //         controller: 'imageModalController',
        //         size: 'lg',
        //         resolve: {
        //             items: function () {
        //                 return {
        //                     thumb: thumb,
        //                     bigImage: bigImage
        //                 };
        //             }
        //         }
        //     });

        //     modalInstance.result.then(function (selectedItem) {
        //         // $ctrl.selected = selectedItem;
        //     }, function () {
        //         // $log.info('Modal dismissed at: ' + new Date());
        //     });
        // };
        
    });

})();
