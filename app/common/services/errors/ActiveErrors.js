'use strict';

/**
 * @ngdoc service
 * @name backOfficeClientApp.ActiveErrors
 * @description
 * # ActiveErrors
 * Service in the backOfficeClientApp for handling a map of errors.
 * We store the currently "active" errors in this service, so that we don't display error dialogs
 * for the same error code immediately one after another (for example when we are logged out, we would get
 * lots of auth exceptions at the same time from lots of rest services)
 */
angular.module('storeApp')
  .service('ActiveErrors', function () {
    var errors = {};

    var add = function(error) {
      errors[error.code] = error;
    };

    var remove = function(error) {
      delete errors[error.code];
    };

    var alreadyHandling = function(error) {
      return errors.hasOwnProperty(error.code);
    };

    this.add = add;
    this.remove = remove;
    this.alreadyHandling = alreadyHandling;

  });
