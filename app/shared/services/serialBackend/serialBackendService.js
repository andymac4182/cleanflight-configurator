(function() {
  'use strict';

  angular
    .module('cleanflightConfigurator')
    .factory('serialBackendService', serialBackendService);

  serialBackendService.$inject = ['$http'];

  function serialBackendService($http) {
    var service = {
      getData: getData
    };

    return service;

    function getData() {}
  }
})();
