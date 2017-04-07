// Define application
//var myapp = angular.module('app');
myapp.controller('diagnostic', diagnostic);

function diagnostic($scope){
	$scope.components=[
	  {"id":"T1","name":"balcone","type":"sensor","subtype":"temperature","dataInterval":60,"checkInterval":300,"power":"low"},
		{"id":"T2","name":"sala","type":"sensor","subtype":"temperature","dataInterval":60,"checkInterval":300,"power":"medium"},
		{"id":"C1","name":"porta","type":"sensor","subtype":"contact","dataInterval":60,"checkInterval":300,"power":"hight"},
		{"id":"C2","name":"balcone","type":"sensor","subtype":"contact","dataInterval":60,"checkInterval":300},
		{"id":"C3","name":"finestra1","type":"sensor","subtype":"contact","dataInterval":60,"checkInterval":300,"power":"hight"},
		{"id":"C4","name":"finestra2","type":"sensor","subtype":"contact","dataInterval":60,"checkInterval":300,"power":"medium"},
		{"id":"L1","name":"sala","type":"actuator","subtype":"light","dataInterval":60,"checkInterval":300,"power":"hight"},
		{"id":"L2","name":"camera","type":"actuator","subtype":"light","dataInterval":60,"checkInterval":300,"power":"low"},
		{"id":"A1","name":"sirena","type":"actuactor","subtype":"alarm","dataInterval":60,"checkInterval":300,"power":"hight"}
	];

	$scope.messages=[
		{"type":"low","idSource":"T2","sendTime":"12:04.56_0022","receiveTime":"12:04.56_0022","body":"active"},
		{"type":"low","idSource":"C1","sendTime":"12:04.56_0022","receiveTime":"12:04.56_0022","body":"active"},
		{"type":"low","idSource":"C3","sendTime":"12:04.56_0022","receiveTime":"12:04.56_0022","body":"active"},
		{"type":"low","idSource":"L1","sendTime":"12:04.56_0022","receiveTime":"12:04.56_0022","body":"active"},
		{"type":"low","idSource":"A1","sendTime":"12:04.56_0022","receiveTime":"12:04.56_0022","body":"active"},
		{"type":"low","idSource":"C4","sendTime":"12:04.56_0022","receiveTime":"12:04.56_0022","body":"active"}
	]

	$scope.getComponent = function(idComponent){
		for (var i = 0; i < $scope.components.length; i++) {
			if($scope.components[i].id == idComponent){
				return $scope.components[i];
			}
		}
	}

	$scope.lastCheck = function(idComponent){
		for (var i = 0; i < $scope.messages.length; i++) {
			if($scope.messages[i].idSource == idComponent){
				return $scope.messages[i];
			}
		}
	}

	$scope.componentStatus = function(idComponent){
		var message = $scope.lastCheck(idComponent);
		if(message == undefined){ return "ko";}
		var component = $scope.getComponent(idComponent);
		var now = 1008;
		var interval=now - message.sendTime;
		if(component.checkInterval > interval ){
			return "ok";
		}else{
			return "ko";
		}
	}
};
