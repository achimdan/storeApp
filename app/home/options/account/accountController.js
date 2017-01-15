(function(){
    'use strict';

    /**
     *
     * @author: Achim Dan
     */
    angular.module('home').controller('accountController', function($scope, $state) {

        $scope.logOut = function () {
            // $state.go();
            console.log('Log out');
        };

    });

})();
