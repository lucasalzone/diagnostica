# Utilizzare servizi Rest con Angular 1° Parte
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

Di seguito l'esempio che mostra come chiamare una risorsa Rest direttamente attraverso
<a href="https://docs.angularjs.org/api/ng/service/$http" target="_blank">$http</a>.

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

## Codice completo su GITHUB
Puoi vedere e scaricare il codice direttamente da GITHUB.
<a href="https://github.com/lucasalzone/AngularRestClient">Download Source</a>

***

# Utilizzare servizi Rest con Angular 2° Parte
Nell'articolo precedente abbiamo visto come utilizzare servizi rest da AngularJS sfruttando l'oggetto $http. Oggi vedremo come rendere più eleante la nostra chiamata
sfruttando un'altro oggetto di AngularJS $resource.

## Perchè utilizzare $resource
$resource rispetto ad $http ci fornisce diverse azioni _pre-impostate_ studiate considerando un modello *CRUD* di una risorsa.
Dunque con l'oggetto $resource avremmo a disposizione diversi metodi che ci consentono, con un'unica definizione di effettuare quelle classiche operazioni che si effettuano sulle Entità.

> CRUD sta per Create Read Update Delete, ovvero le operazioni che si possono effettuare su una normale tabella.

## Import modulo
AngularJS mette a disposizione questo oggetto, attraverso un modulo specifico, che però non è incluso nell'import base, dunque come prima cosa dobbiamo aggiungere alla nostra pagina anche questo modulo.

```javascript
<script src="js/angular-resource.js"></script>
```

Essendo un modulo aggiuntivo, dobbiamo ricordarci di effettuare l' _inject_ nel momdulo della nostra applicazione.

```javascript
var myapp = angular.module('app', ['ngResource']);
```

e successivamente anche nel controller.
```javascript
myapp.controller('ctrl', function ctrlApp($scope, $resource) {
	...
}
```

## Approfondimenti sulle azioni di default
Una volta definito un oggetto di tipo _$resource_ potremmo in automatico accedere alle seguenti funzioni:

- _**get**_ : ricerca puntuale dei una risorsa per ID. (http method GET)
- _**save**_ : salvataggio risorsa. (http method POST)
- _**query**_ : ricerca risorse (questo metodo restituisce sempre un'array).(http method GET)
- _**remove**_ : rimozione di una risorsa. (http method DELETE)
- _**delete**_ : cancellazione di una risorsa. (http method DELETE)

Ognuna delle funzioni elencate, è associata al relativo metodo http.

> Quando si utilizza una funzione di _$resourse_, viene in automatico restituito un riferimento al risultato, che può essere un'array a seconda del tipo di metodo
> utilizzato. Quando la chiamata al servizio sarà terminata, verrà in automantico aggiornato il risultato. E' dunque buona norma assegnare il risultato della chamata
> al modello dati, in modo che esso venga aggiornato dinamicamente e di conseguenza renderizzato appena il risultato cambia.

Di seguito alcuni esempi di servizi Restful associati alla relativa funzione:

|metodo| risorsa | note|
|-- |-- | -- |
|get |http://localhost:8080/Rubrica/contatti/1234567 | Attraverso la GET è possibile recuperare la risorsa di un contatto specifico. Viene utilizzato il _path-param_ codice per identificarlo in maniera univoca. |
|save | http://localhost:8080/Rubrica/contatti/1234567 {dati} | In questo metodo viene utilizzato il codice come _path-param_ per puntare al contatto corretto, e i dati da salvare.|
|query |http://localhost:8080/Rubrica/contatti | Il metodo Query restituisce i contatti |
|delete |http://localhost:8080/Rubrica/contatti/1234567 | utilizzato per eliminare uno specifico contatto. |

Ecco un'esempio di definizione di $resource.

```javascript
	var User = $resource(
		'http://127.0.0.1:8080/test/api/hello/utenti/:userId',
		{userId:'@userID'}
	);
```

## Azioni custom
Oltre alle azioni di default messe a disposizione da $resource, possiamo creare delle azioni personalizzate, che prevedono metodi e parametri diversi.
In questo modo con un'unico oggetto di riferimento possiamo fornire l'accesso ad un'intera API relativa ad una risorsa.

Di seguito un'esempio di un'azione _custom_ :

```javascript
	var User = $resource(
		'http://127.0.0.1:8080/test/api/hello/utenti/:userId',
		{userId:'@userID'}, //,
		{'update': {'method' : 'POST', 'params':{'user':'@user'}
	});
```

## Richiamare resource.

Ed ecco alla fine alcuni esempi di come utilizzare i metodi di resource all'interno di un controller o di una factory. In questo caso faremo riferimento all'oggetto User definito precedentemente.

```javascript
	$scope.users = User.query();
```
recupera l'elenco completo degli utenti.

Se usiamo una factory, possiamo passare direttamente il riferimento a $resource.

```javascript
myapp.factory('UserFactory', function($resource){
	return $resource('http://127.0.0.1:8080/test/api/hello/utenti/:name');
});
```

è poi utilizzarlo all'interno del nostro controller.

```
myapp.controller('ctrl', function ctrlApp($scope, UserFactory){

	$scope.userList=function(){
		$scope.users = UserFactory.query();
	}
	$scope.userList(); //call userList when load controller.

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
```

## Codice completo su GITHUB
Puoi vedere e scaricare il codice direttamente da GITHUB.
<a href="https://github.com/lucasalzone/AngularRestClient">Download Source</a>
