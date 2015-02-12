(function() {
  'use strict';

  angular
    .module('cleanflightConfigurator')
    .factory('serialPortHandlerService', serialPortHandlerService);

  serialPortHandlerService.$inject = ['$log', 'serialService'];

  function serialPortHandlerService($log, serialService) {
    var portDetails = {
      portName: null,
      baudRate: 115200
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
      this.currentPortName = this.portList[0];
    }

    function connectToDevice() {
      serialService.openPort(portDetails.portName, portDetails.baudRate);
    }

    return service;
  }
})();
