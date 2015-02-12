(function() {
	'use strict';

	angular
		.module('cleanflightConfigurator')
		.factory('chromeSerialService', chromeSerialService);


	function chromeSerialService($log, $rootScope) {
		var portIsConnected = false;

        var service = {
			getPortList: getPortList,
			openPort: openPort,
			writeHex: writeHex,
			registerReadCallback: registerReadCallback,
			closePort: closePort,

            portIsConnected: portIsConnected
		};

		activate();

        var connectionId;

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

		function openPort(portName, bitrate) {
			if(!portIsConnected) {
                var options = {
                    bitrate: bitrate
                }
                chrome.serial.connect(portName, options, portOpened);
            }
            else
            {
                $log.error("Port already connected");
            }
		}

		function writeHex(data) {
			chrome.serial.send(connectionId, data, function(
				sendInfo) {

			})
		}

		function registerReadCallback(success, error) {
			chrome.serial.onReceive.addListener(function(successData) {
				if (successData.connectionId === connectionId) {
					success(successData.data);
				}
			});
			chrome.serial.onReceiveError.addListener(function(errorData) {
				if (errorData.connectionId === connectionId) {
					error(errorData.error)
				}
			});
		}

		function closePort() {
			chrome.serial.disconnect(connectionId, portClosed)
		}


		function portOpened(connectionInfo) {
			$rootScope.$broadcast('SerialPort.Opened');
			connectionId = connectionInfo.connectionId;
            portIsConnected = true;
		}

		function portClosed(bool) {
			$rootScope.$broadcast('SerialPort.Closed');
			connectionId = null;
		}

        return service;
	}
})();
