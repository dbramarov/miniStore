app.factory('customerFactory', ['$http', function($http) {
  var factory = {};

  factory.getCustomers = function(callback){
    $http.get('/getCust').then(function(returned_data){
      callback(returned_data.data);
    })
  }

  factory.remove = function(id, callback){
    $http.delete('/remove/' + id).then(function(returned_data){
      if(typeof(callback) == "function"){
          callback(returned_data.data);
        }
    })
  }

  factory.create = function(newCustomer, callback){
  	$http.post('/customer', newCustomer).then(function(returned_data){
  		if(typeof(callback) == "function"){
        	callback(returned_data.data);
        }
  	})
  	.catch(function(err){
   	console.log(err);
    });
  }

  return factory;
}]);