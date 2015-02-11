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


		var usbDevices = {
			STM32DFU: {
				'vendorId': 1155,
				'productId': 57105
			}
		};
		var usbPermissions = {
			permissions: [{
				'usbDevices': [usbDevices.STM32DFU]
			}]
		};

		function checkUsbPermissions(callback) {
			chrome.permissions.contains(usbPermissions, function(result) {
				if (result) {
					GUI.optional_usb_permissions = true;
				} else {
					$log.log('Optional USB permissions: missing');
					GUI.log(chrome.i18n.getMessage('please_grant_usb_permissions'));

					// display optional usb permissions request box
					$('div.optional_permissions').show();

					// UI hooks
					document.getElementById("requestOptionalPermissions").addEventListener(
						'click',
						function() {
							chrome.permissions.request(usbPermissions, function(result) {
								if (result) {
									GUI.log(chrome.i18n.getMessage('usb_permissions_granted'));
									$('div.optional_permissions').hide();

									GUI.optional_usb_permissions = true;
								}
							});
						});
				}

				if (callback) {
					callback();
				}
			});
		}
	}
})();
