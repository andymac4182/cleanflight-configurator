(function () {
    "use strict";
    angular.module('cleanflightConfigurator')
        .controller('LandingCtrl', ['$scope',
            function ($scope) {
                $scope.welcomeText = "This is the landing page";
            }
        ]);
}());
