(function () {
    'use strict';

    angular
        .module('cleanflightConfigurator')
        .factory('serialPortHandlerService', serialPortHandlerService);

    serialPortHandlerService.$inject = ['$log', 'serialService', '$rootScope'];

    function serialPortHandlerService($log, serialService, $rootScope) {
        var portDetails = {
            portName: null,
            baudRate: 115200,
            isConnected: false
        };

        var service = {
            portList: serialService.getPortList(),
            portSpeedList: [1200, 2400, 4800, 9600, 14400, 19200, 28800, 38400, 57600, 115200],
            refreshPortList: refreshPortList,
            portDetails: portDetails,

            connectToDevice: connectToDevice
        };

        function refreshPortList() {
            $log.info("serialPortHandlerService.refreshPortList");
            this.portList = serialService.getPortList();
            portDetails.portName = this.portList[0];
        }

        function connectToDevice() {
            serialService.openPort(portDetails.portName, portDetails.baudRate);
        }

        $rootScope.$on('SerialPort.Opened', function (event, data) {
            portDetails.isConnected = true;
            $log.info("Serial port connected");
        });

        $rootScope.$on('SerialPort.Closed', function (event, data) {
            portDetails.isConnected = false;
        });


        return service;
    }
})();
