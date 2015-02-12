(function() {
  "use strict";
  angular.module('cleanflightConfigurator')
    .directive('connection', connectionDirective);

  connectionDirective.$inject = ['$log', 'serialPortHandlerService'];


  function connectionDirective($log, serialPortHandlerService) {
    return {
      templateUrl: 'app/shared/connection/connectionView.html',
      restrict: 'E',
      scope: {

      },
      controller: function($scope) {
        $scope.portSpeedList = serialPortHandlerService.portSpeedList;

        $scope.portDetails = serialPortHandlerService.portDetails;

        $scope.refreshPortList = function refreshPortList() {
          $log.info("Loading port list");
          serialPortHandlerService.refreshPortList();
        };

        $scope.connect = function() {
          $log.log("Connect function");
          serialPortHandlerService.connectToDevice();
        };

        $scope.$watch(serialPortHandlerService.portList, function() {
          $scope.portList = serialPortHandlerService.portList;
          if (!$scope.currentPortName) {

          }

        }, true);
      },
      link: function(scope, element, attrs) {

      }
    };
  }
}());
