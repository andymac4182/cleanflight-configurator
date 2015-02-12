(function() {
	'use strict';

	angular
		.module('cleanflightConfigurator')
		.factory('chromeSerialService', chromeSerialService);


	function chromeSerialService($log) {
		var self = this;

		var service = {
			getPortList: getPortList
		};

		activate();

		return service;

		function activate() {

		}

		function getPortList() {
			var portList = [];

			chrome.serial.getDevices(function(devices_array) {
				devices_array.forEach(function(device) {
					$log.info("Found Port - " + device.path);
					portList.push(device.path);
				});
			});

      return portList;
		}
	}
})();
