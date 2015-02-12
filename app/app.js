(function() {
	"use strict";
	var app = angular.module('cleanflightConfigurator', ['ui.router']);

	app.config(['$urlRouterProvider', '$stateProvider', '$compileProvider', function(
		$urlRouterProvider, $stateProvider, $compileProvider) {
		$stateProvider
			.state('landing', {
				url: '/landing',
				templateUrl: 'app/components/landing/landingView.html',
				controller: 'LandingController'
			});

		$urlRouterProvider.otherwise('/landing');

    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension):/); // Tells angular to trust the chrome-extension:// prefix for URL routing
  }]);

	app.run(function($rootScope, $window) {
		angular.element($window).bind('resize', function() {
			$rootScope.$broadcast('resize');
		});
	});
}());
