# Utilizzare servizi Rest con Angular
In questo articolo vedremo come consumare un servizio restful attraverso **AngularJS**.
Potete vedere come creare facilmente un servizio REST nel post []() 

## Costruiamo la pagina
Iniziamo a definire la nostra pagina, inserendo l' applicazione (_ng-app_), ed il controller (_ng-controller_).

```xml
<html ng-app="app">
	...
	<body ng-controller="ctrl">
	...
<body>
```

Sarà necessario importare le librerie di angularjs (_angular.min.js_) ed il relativo js che conterrà il nostro codice (_app.js_).

```xml
 <head>
	<script src="js/angular.min.js"></script>
	<script src="js/app/app.js"></script>
</head>
```

## Implementiamo il nostro controller.
Adesso possiamo aggiungere il nostro codice dentro il _js_.

```javascript
var myapp = angular.module('app', []);
myapp.controller('ctrl', function ctrlApp($scope, $http) {
...
});
```

Di seguito l'esempio che mostra come chiamare una risorsa Rest direttamente attraverso [$http](https://docs.angularjs.org/api/ng/service/$http)

```javascript
$http({
  method: 'GET',
  url: '/someUrl'
}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
```
