(function() {
  "use strict";
  angular.module('cleanflightConfigurator')
    .directive('connection', function() {
      return {
        templateUrl: 'app/shared/connection/connectionView.html',
        restrict: 'E',
        scope: {

        },
        link: function(scope, element, attrs) {
          scope.asdf = "1234";
        }
      };
    });
}());
