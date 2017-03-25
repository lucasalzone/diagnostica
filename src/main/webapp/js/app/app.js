// Define application
var myapp = angular.module('app', ['ngResource']);

myapp.factory('UserFactory', function($resource){
	return $resource('http://127.0.0.1:8080/test/api/hello/utenti/:name');
});

myapp.controller('ctrl', function ctrlApp($scope, UserFactory){ //  $http,$resource,restFactory) {
	
	$scope.userList=function(){
		$scope.users = UserFactory.query();
	}
	$scope.userList();
	
	$scope.searchUser=function(){
		$scope.user = UserFactory.get({'name':$scope.selectName});
	}
	$scope.addUser=function(){
		UserFactory.save(
			{'name' :$scope.newUser.name,'user':$scope.newUser},
			function(result){
				if(result.$resolved){
					alert("success");
					$scope.userList();
				}
			}
		);
		
	}
	$scope.updateUser=function(userValue){
		UserFactory.save(
			{'name' :userValue.name,'user':userValue},
			function(result){
				if(result.$resolved){
					alert("success");
				}
			}
		);
	}
	$scope.deleteUser=function(user){
		UserFactory.delete(
			{'user' :user},
			function(result){
				if(result.$resolved){
					$scope.user=undefined;
					alert("success");
					$scope.userList();
				}
			}
		);
	}
});
