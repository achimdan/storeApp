(function () {
	'use strict';

	/**
	 * @ngdoc service
	 * @name backOfficeClientApp.ErrorDialogs
	 * @description
	 * # ErrorDialogs
	 * Service in the backOfficeClientApp for handling error dialogs
	 */
	angular.module('storeApp')
		.service('ErrorDialogs', ['$injector', 'ActiveErrors', '$window', '$location', '$uibModal', function ($injector, ActiveErrors, $window, $location, $uibModal) {

			var openErrorDialog = function (error) {
				return $uibModal.open({
					animation: true,
					backdrop: 'static',
					keyboard: false,
					templateUrl: 'common/services/errors/error.html',
					controller: 'ErrorCtrl',
					size: 'md',
					resolve: {
						errorData: error
					}
				});
			};

			var handleErrorDismiss = function (error) {
				ActiveErrors.remove(error);
				if (!error.recoverable) {
					$location.path('/login');
					$window.location.reload();
				}
			};

			var handleError = function (error) {
				if (ActiveErrors.alreadyHandling(error)) {
					//we're showing or about to show this error code
					//already so ignore
					return;
				} else {
					ActiveErrors.add(error);
				}

				var errorDialogInstance = openErrorDialog(error);

				errorDialogInstance.result.then(function () {
					handleErrorDismiss(error);
				}, function () {
					handleErrorDismiss(error);
				});
			};

			this.handleError = handleError;
		}]);

})();