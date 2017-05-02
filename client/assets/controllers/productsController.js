app.controller('productsController', ['$scope','productsFactory','$location', function($scope, productsFactory, $location) {
  $scope.products = [];
  $scope.errors = {};

  	var getProducts = function(){
  		productsFactory.getProducts(function(data){
  			$scope.products = data;
  		})
  	}
  	getProducts()

	$scope.create = function(){
		productsFactory.create($scope.newProduct, function(data){
			if(data.error){
				$scope.errors = data;
			}
			else{
			$scope.errors = {};
			$scope.newProduct = {};
  			getProducts()
			}		
		})
	}
}]);