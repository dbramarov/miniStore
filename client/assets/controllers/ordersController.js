app.controller('ordersController', ['$scope','productsFactory','customerFactory','ordersFactory','$location', function($scope, productsFactory, customerFactory, ordersFactory ,$location) {
  $scope.products = [];
  $scope.customers = [];
  $scope.orders = [];
  $scope.errors = [];

  	var getProducts = function(){
  		productsFactory.getProducts(function(data){
  			$scope.products = data;
  		})
  	}
  	getProducts()

  	var getCustomers = function(){
  		customerFactory.getCustomers(function(data){
  			$scope.customers = data;
  		})
  	}
  	getCustomers()

  	var getOrders = function(){
  		ordersFactory.getOrders(function(data){
  			$scope.orders = data;
  		})
  	}
  	getOrders()

  	$scope.order = function(){
  		ordersFactory.order($scope.newOrder, function(data){
			if(data.error){
				$scope.error.push(data);
			}
			else{
				$scope.errors = {};
				$scope.newOrder = {};
				getOrders()
			}		
		})
  	}

}]);