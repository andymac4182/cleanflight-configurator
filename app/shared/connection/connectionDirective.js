(function() {
	"use strict";
	angular.module('cleanflightConfigurator')
		.directive('connection', connectionDirective);

	connectionDirective.$inject = ['$log', 'serialPortHandlerService'];


	function connectionDirective($log, serialPortHandlerService) {
		return {
			templateUrl: 'app/shared/connection/connectionView.html',
			restrict: 'E',

      controller: function($scope) {
        $scope.portSpeedList = serialPortHandlerService.portSpeedList;

        $scope.currentSpeed = serialPortHandlerService.defaultPortSpeed;
        $scope.currentPort = serialPortHandlerService.portList[0];

        $scope.refreshPortList = function refreshPortList() {
          $log.info($scope.currentPort);
          $log.info("Loading port list");
          serialPortHandlerService.refreshPortList();
        };

        $scope.$watch(serialPortHandlerService.portList, function() {
          $scope.portList = serialPortHandlerService.portList;
          $scope.currentPort = serialPortHandlerService.portList[1];
        }, true);
      },

			link: function(scope, element, attrs) {

			}
		};
	};
}());
