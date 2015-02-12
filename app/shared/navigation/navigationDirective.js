(function () {
  "use strict";
  angular.module('cleanflightConfigurator')
    .directive('navigation', function () {
      return {
        templateUrl: 'app/shared/navigation/navigationView.html',
        restrict: 'E',
        scope: {

        },
        link: function (scope, element, attrs) {
          scope.pages = [
            { name: "Home", url: "#/landing", serial_required: false},
            { name: "Setup", url: "#/setup", serial_required: false},
            { name: "Ports", url: "#/ports", serial_required: false},
            { name: "Configuration", url: "#/configuration", serial_required: false},
            { name: "PID Tuning", url: "#/tuning", serial_required: false},
            { name: "Receiver", url: "#/receiver", serial_required: false},
            { name: "Modes", url: "#/modes", serial_required: false},
            { name: "Adjustments", url: "#/configuration", serial_required: false},
            { name: "Servos", url: "#/servos", serial_required: false},
            { name: "GPS", url: "#/gps", serial_required: false},
            { name: "Motors", url: "#/motors", serial_required: false},
            { name: "LED Strip", url: "#/led", serial_required: false},
            { name: "Sensors", url: "#/sensors", serial_required: false},
            { name: "Logging", url: "#/logging", serial_required: false},
            { name: "CLI", url: "#/cli", serial_required: false}
          ]

          scope.getPages = function () {
            return scope.pages;
          }
        }
      };
    });
}());
