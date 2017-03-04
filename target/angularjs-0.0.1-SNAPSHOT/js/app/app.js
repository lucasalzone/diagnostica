// Define application
var myapp = angular.module('app', []);

// Define the `ctrlApp` controller on the `phonecatApp` module
myapp.controller('ctrl', function ctrlApp($scope, $http) {
	$scope.name="luca";
	$scope.utente;
	$scope.searchUser=function(){
		$http({
			method : 'GET',
			url : '/test/api/hello/utenti/'+$scope.name
		}).then(function successCallback(response) {
			$scope.utente = response;
		}, function errorCallback(response) {
			alert("Errore!" + response);
		});
	}
	$scope.searchUser();

});
