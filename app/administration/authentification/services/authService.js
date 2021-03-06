(function(){
    'use strict';

    /**
     * This is a sample module
     * Generated by ng-appgen Yeomen/Angular generator.
     *
     * @author: Achim Dan
     */

    angular.module('administration')
    .factory('authService', function($http, $q, $injector, $state, $cookies, Notification, Config) {

        var Login = $injector.get('authModel'),
            HttpErrors = $injector.get('HttpErrors'),
        
        errorCallback = function (errorResponse) {
            HttpErrors.handleError(errorResponse);
        };

        return {
            authorize: function(accessLevel, role) {
                var status = $cookies.get('token');
                console.log(status);
                if (status) {
                    return true;
                } else {
                    return false;
                }

            // if(role === undefined)
            //     role = $rootScope.user.role;
            //     return accessLevel &amp; role;
            },

            refreshToken : function (url) {
                var url_token = Config + 'api/auth/token',
                    options = {
                        headers : {
                            'Authorization' : $cookies.get('refreshToken')
                        }
                    };
                $http.get(url_token, options).then(function(success){
                    $cookies.put('token', success.data.token);
                });
            },

            isLoggedIn: function(user) {
                var status = $cookies.get('token');
                console.log('status', status);
                
                if (status) {
                    return true;
                } else {
                    return false;
                }

                // if(user === undefined)
                //     user = $rootScope.user;
                // return user.role === userRoles.user || user.role === userRoles.admin;
            },

            // register: function(user, success, error) {
            //     $http.post('/register', user).success(success).error(error);
            // },

            login: function(credentials, success, error) {
                Login.login(credentials).then(function(success){
                    // $cookies.put('auth', 'authentificated');
                    $cookies.put('refreshToken', success.data.refreshToken);
                    $cookies.put('token', success.data.token);
                    $state.go('dashboard');
                    Notification.success({message: 'Success message goes here', delay: 2000});
                },errorCallback);
            },

            // logout: function(success, error) {
            //     $http.post('/logout').success(function(){
            //         $rootScope.user = {
            //             username = '',
            //             role = userRoles.public
            //         };
            //         success();
            //     }).error(error);
            // }
        };

        // var factory = {},
        //     Login = $injector.get('authModel');

        // var successLogin = function (success) {
        //     console.log(success);
        //     $cookies.put('auth', 'authentificated');
        //     $state.go('dashboard');
        // };

        // var errorLogin = function (error) {
        //     console.log('error',error);
        //     // if (error.error === ) {

        //     // }
        // };

        // factory.login = function (credentials) {
        //     Login.login(credentials).then(successLogin,errorLogin);
        // };

        // factory.getAuthStatus = function () {
        //     var status = $cookies.get('auth');
        //     console.log('status',status);
        //     if (status) {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // };

        // return factory;

    })

    
    .factory('authInterceptor', function ($location, $q, $window, $cookies) {
        var status = $cookies.get('token');
        return {
            request: function (config) {
                config.headers = config.headers || {};
                config.headers.Authorization = 'Bearer ' + status;
                return config;
            }
        };
    });

})();
