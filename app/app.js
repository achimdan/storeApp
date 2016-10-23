(function(){
    'use strict';

    /**
     * This is the main application file.
     * Generated by ng-appgen Yeomen/Angular generator.
     *
     * @author: Tapas Jena
     * @copyright: Anitech Consulting Services Pvt Ltd.
     */
    angular.module('storeApp', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'restangular', 'angular-loading-bar', 'home', 'common', 'administration','ngMaterial','ncy-angular-breadcrumb']);
    
    angular.module('storeApp').config(function($stateProvider, $urlRouterProvider) {

        /* Add New States Above */
        $urlRouterProvider.otherwise('/administration');

    });
    
    angular.module('storeApp').run(function($rootScope) {

        $rootScope.safeApply = function(fn) {
            var phase = $rootScope.$$phase;
            if (phase === '$apply' || phase === '$digest') {
                if (fn && (typeof(fn) === 'function')) {
                    fn();
                }
            } else {
                this.$apply(fn);
            }
        };

    });

})();
