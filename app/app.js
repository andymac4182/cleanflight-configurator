(function() {
	"use strict";
	var app = angular.module('cleanflightConfigurator', ['ui.router']);

	app.config(['$urlRouterProvider', '$stateProvider', function(
		$urlRouterProvider, $stateProvider) {
		$stateProvider
			.state('landing', {
				url: "",
				templateUrl: 'components/landing/landingView.html',
				controllerAs: 'landingController'
			})

		$urlRouterProvider.otherwise('/');
	}]);

	app.run(function($rootScope, $window) {
		angular.element($window).bind('resize', function() {
			$rootScope.$broadcast('resize');
		});
	});
}());
