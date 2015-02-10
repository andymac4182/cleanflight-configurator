(function() {
  "use strict";
  var app = angular.module('cleanflightConfigurator', ['ui.router']);

  app.config(['$urlRouterProvider', '$stateProvider', function(
    $urlRouterProvider, $stateProvider) {
    $stateProvider
      .state('landing', {
        url: "/landing",
        templateUrl: 'app/components/landing/landingView.html',
        controller: 'LandingController'
      })

    $urlRouterProvider.otherwise('/landing');
  }]);

  app.run(function($rootScope, $window) {
    angular.element($window).bind('resize', function() {
      $rootScope.$broadcast('resize');
    });
  });
}());
