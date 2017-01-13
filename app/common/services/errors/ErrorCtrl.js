'use strict';

/**
 * @ngdoc function
 * @name backOfficeClientApp.controller:ErrorCtrl
 * @description
 * # ErrorCtrl
 * Controller of the backOfficeClientApp
 */
angular.module('storeApp')
  .controller('ErrorCtrl',['$scope', '$uibModalInstance','errorData', function ($scope, $uibModalInstance, errorData) {

    var title = 'Info';
    var message = 'An error has occurred';
    // var message;
    var code = errorData.error;

    // if (code === 'Unauthorized') {
    //   $location.path('/login');
    // }

    switch (code.error) {
      case 'Unauthorized':
        message = errorData.error.message;
        break;

      case 'PartnerNameTaken':
        message = 'The partner name is already in use';
        break;
      case 'PartnerNotFound':
        message = 'Partner does not exist';
        break;
      case 'UsernameTaken':
        message = 'Username is already taken';
        break;
      case 'UserNotFound':
        message = 'User could not be found';
        break;
      case 'NoPermission':
        message = 'No permission to perform this operation';
        break;
      case 'IncorrectPassword':
        message = 'User did not supply the correct old password';
        break;
      case 'InvalidCredentials':
        message = 'The username or password entered is incorrect';
        break;
      case 'InvalidState':
        message = 'Invalid state';
        break;
      case 'ProductCodeTaken':
        message = 'The product code is already taken';
        break;
      case 'BadRequest':
        message = 'The server has received an invalid request';
        title = 'Error';
        break;
      default:
        var title = 'Error';
        break;
    }

    $scope.title = title;
    $scope.message = message;

    $scope.ok = function () {
      $uibModalInstance.close();
    };

  }]);
