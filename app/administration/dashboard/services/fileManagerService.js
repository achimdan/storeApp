(function(){
    'use strict';

    /**
     * This is a sample factory
     * Generated by ng-appgen Yeomen/Angular generator.
     *
     * @author: Achim Dan
     */
    angular.module('administration')
    .factory('fileManagerService', function($injector, $http, $q) {

        var factory = {},
            fileManager = $injector.get('fileManager'),

            files = {
                loaded: false,
                fetching: false,
                data: {}
            };

        var successCallback = function (success) {
            console.log(success);
        };
        var errorCallback = function (error) {
            console.log(error);
        };

        factory.fetchFiles = function () {
            files.fetching = true;
            fileManager.fetchFiles().then(successCallback, errorCallback);
        };

        factory.getFiles = function () {
            return files.data;
        };

    });

})();
