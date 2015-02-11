(function() {
  "use strict";
  angular.module('cleanflightConfigurator')
    .controller('LandingController', ['$scope',
      function($scope) {
        $scope.welcomeText = "This is the landing page";
      }
    ]);
}());
