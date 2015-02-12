(function() {
  'use strict';

  angular
    .module('cleanflightConfigurator')
    .factory('otgSerialService', otgSerialService);

  otgSerialService.$inject = ['$log'];

  function otgSerialService($log) {
    var self = this;

    var service = {
      getPortList: getPortList,
      openPort: openPort,
      writeHex: writeHex,
      registerReadCallback: registerReadCallback,
      closePort: closePort
    };

    activate();

    return service;

    function activate() {
      checkPermissions();
    }

    function getPortList() {
      return ['USB'];
    }

    function checkPermissions() {
      serial.requestPermission(function success() {
        $log.log("Request permission success");
      }, function error() {
        $log.error("Request permission failed");
      });
    }

    function openPort(portName) {
      serial.open(opts, function success() {
        $rootScope.$broadcast('SerialPort.Open');
      }, function error() {
        $log.error("Open port failed");
      });
    }

    function writeHex(data) {
      serial.writeHex(data, function success() {

      }, function error() {
        $log.error("Write Hex failed");
      });
    }

    function registerReadCallback(success, error) {
      serial.registerReadCallback(success, error);
    }

    function closePort(portName) {
      serial.close(function success() {
        $rootScope.$broadcast('SerialPort.Close');
      }, function error() {
        $rootScope.$broadcast('SerialPort.Close');
        $log.error("Close port failed");
      })
    }

  }
})();
