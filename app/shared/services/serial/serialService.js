(function() {
  'use strict';

  angular
    .module('cleanflightConfigurator')
    .factory('serialService', serialService);

  serialService.$inject = ['$log', '$injector'];

  function serialService($log, $injector) {
    // Example of handling which serial service to return
    if ($window.cordova) {
      return $injector.get('otgSerialService');
    } else {
      return $injector.get('chromeSerialService');;
    }
  }
})();
