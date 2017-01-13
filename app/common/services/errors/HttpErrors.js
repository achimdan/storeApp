(function () {

	'use strict';

	/**
	 * @ngdoc service
	 * @name backOfficeClientApp.HttpErrors
	 * @description
	 * # HttpErrors
	 * Service in the backOfficeClientApp for mapping http error responses from the server to error objects
	 * including the error and whether it is a recoverable error
	 *
	 */
	angular.module('storeApp')
		.service('HttpErrors', ['ErrorDialogs', function (ErrorDialogs) {

			var errorFromRejection = function (rejection) {
				return errorFromResponse(rejection);
			};

			var isErrorType = function (errorResponse, errorCode) {
				if (angular.isDefined(errorResponse.data.error)) {
					return errorResponse.data.error === errorCode;
				} else {
					return false;
				}
			};

			var errorFromResponse = function (errorResponse) {
				var errorCode = null;
				//TODO deal with situations where we don't have data back from server
				if (angular.isDefined(errorResponse.data) && angular.isDefined(errorResponse.data.error)) {
					errorCode = errorResponse.data;
				}
				var recoverable = false;

				if (errorCode !== null) {
					//we have an error code back from the API
					//so we know what to do
					switch (errorCode.error) {
						case 'Unauthorized':
						case 'PartnerCodeTaken':
						case 'PartnerNameTaken':
						case 'UserNameTaken':
						case 'UserNotFound':
						case 'NoPermission':
						case 'IncorrectPassword':
						case 'InvalidCredentials':
							recoverable = true;
							break;
						case 'BadRequest':
							recoverable = false;
							break;
						default:
							recoverable = false;
							break;
					}
				}

				return {
					error: errorCode,
					recoverable: recoverable
				};
			};

			var handleError = function (errorResponse) {
				var error = errorFromResponse(errorResponse);
				ErrorDialogs.handleError(error);
			};


			this.errorFromRejection = errorFromRejection;
			this.isErrorType = isErrorType;
			this.handleError = handleError;
			this.PartnerCodeTaken = 'PartnerCodeTaken';
			this.PartnerNameTaken = 'PartnerNameTaken';
			this.BadRequest = 'BadRequest';

		}]);

})();