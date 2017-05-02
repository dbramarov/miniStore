app.controller('customerController', ['$scope','customerFactory','$location', function($scope, customerFactory, $location) {
  $scope.customers = [];
  $scope.errors = {};

  	var getCustomers = function(){
  		customerFactory.getCustomers(function(data){
  			$scope.customers = data;
  			$scope.newCustomer = {};
  		})
  	}
  	getCustomers()

	$scope.create = function(){
		customerFactory.create($scope.newCustomer, function(data){
			if(data.error){
				$scope.errors = data;
			}
			else{
			$scope.errors = {};
			getCustomers();	
			}		
		})
	}

	$scope.remove = function(id){
		customerFactory.remove(id)
		getCustomers();
	}
}]);