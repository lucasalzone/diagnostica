# Utilizzare servizi Rest con Angular

## Semplice chiamata con http
Di seguito l'esempio che mostra come chiamare una risorsa Rest direttamente attraverso $http.

'''javascript
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
  '''
