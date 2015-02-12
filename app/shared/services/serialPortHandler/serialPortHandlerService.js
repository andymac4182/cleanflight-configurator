(function () {
  'use strict';

  angular
    .module('cleanflightConfigurator')
    .factory('serialPortHandlerService', serialPortHandlerService);

  serialPortHandlerService.$inject = ['$log', 'serialService'];

  function serialPortHandlerService($log, serialService) {
    var service = {
      portList: serialService.getPortList(),
      portSpeedList: [1200, 2400, 4800, 9600, 14400, 19200, 28800, 38400, 57600, 115200],
      defaultPortSpeed: 115200,
      refreshPortList: refreshPortList
    };

    return service;

    function refreshPortList() {
      $log.info("serialPortHandlerService.refreshPortList");
      this.portList = serialService.getPortList();
    }
  }
})();
