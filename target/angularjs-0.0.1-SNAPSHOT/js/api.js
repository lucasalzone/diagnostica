// Define application
var phonecatApp = angular.module('app', []);

// Define the `ctrlApp` controller on the `phonecatApp` module
phonecatApp.controller('ctrl', function ctrlApp($scope) {
  $scope.utenti = [
    {
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];
});