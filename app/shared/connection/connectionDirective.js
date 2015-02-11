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
				scope.asdf = "1234";

				scope.portSpeedList = serialPortHandlerService.portSpeedList;

				scope.currentSpeed = serialPortHandlerService.defaultPortSpeed;
				scope.currentPort = serialPortHandlerService.portList[0];

				scope.refreshPortList = function refreshPortList() {
					$log.info("Loading port list");
					serialPortHandlerService.refreshPortList();
					scope.portList = serialPortHandlerService.portList;
				};


			}
		};
	};
}());
