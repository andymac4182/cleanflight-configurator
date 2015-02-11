(function() {
		'use strict';

		angular
			.module('app')
			.factory('usbService', usbService);

		usbService.$inject = ['$log'];

		function $safeitemname$($log) {
			var service = {
				checkUsbPermissions: checkUsbPermissions
			};

			return service;



		}
	}
})();
