// Define application
var myapp = angular.module('app', []);

// Define the `ctrlApp` controller on the `phonecatApp` module
myapp.controller('ctrl', function ctrlApp($scope, $http) {
	$scope.name="luca";
	$scope.utente;
	$scope.searchUser=function(){
		$http({
			method : 'GET',
			url : 'http://127.0.0.1:8080/test/api/hello/utenti/'+$scope.name
		}).then(function successCallback(response) {
			$scope.utente = response.data;
		}, function errorCallback(response) {
			alert("Errore!" + response);
		});
	}
	$scope.searchUser();
});
