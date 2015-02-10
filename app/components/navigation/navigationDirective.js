(function () {
    "use strict";
    angular.module('cleanflightConfigurator')
        .directive('navigation', function () {
            return {
                templateUrl: 'app/components/navigation/navigationView.html',
                restrict: 'E',
                scope: {

                },
                link: function(scope, element, attrs){
                    scope.asdf = "1234";
                }
            };
        });
}());