angular.module('app', [])

.controller('controlador', function($scope,$http){
	
	$http({method:'get', url:'http://localhost:8000/all'})
	.then(function(data){
		$scope.items = data.data;
		console.log(data);
	}, function(err){
		console.log(err);
	})


	$scope.agregar = function(nombre){
		var data = {
			name: nombre
		}
		$http.post('http://localhost:8000/add', data);
	}
})
