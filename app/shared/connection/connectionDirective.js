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
			link: function(scope, element, attrs) {
				scope.portSpeedList = serialPortHandlerService.portSpeedList;

				scope.portBaudRate = serialPortHandlerService.portBaudRate;
				scope.currentPortName = serialPortHandlerService.currentPortName;

				scope.refreshPortList = function refreshPortList() {
					$log.info("Loading port list");
					serialPortHandlerService.refreshPortList();
				};

				scope.connect = function connect() {
					$log.log("Connect function");
					serialPortHandlerService.connectToDevice();
				};

				scope.$watch(serialPortHandlerService.portList, function() {
					scope.portList = serialPortHandlerService.portList;
					if (!scope.currentPort) {

					}

				});

				scope.$watch(scope.currentPort, function() {
					$log.info("Current port: " + scope.currentPort);
				})


			}
		};
	};
}());
