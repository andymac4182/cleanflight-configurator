(function () {
    "use strict";
    var app = angular.module('cleanflightConfigurator', ['ngRoute']);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/landing', {
            templateUrl: 'app/views/landing/landingView.html',
            controller: 'LandingController'
        }).otherwise({
                redirectTo: '/landing'
        });
    }]);

    app.run(function($rootScope, $window) {
        angular.element($window).bind('resize', function() {
            $rootScope.$broadcast('resize');
        });
    });
}());