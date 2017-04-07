myapp
.factory('RsComponents', function($resource){
	return $resource('http://127.0.0.1:8080/test/api/hello/components/:id');
})
.factory('RsMessages', function($resource){
	return $resource('http://127.0.0.1:8080/test/api/hello/messages/:id');
});
