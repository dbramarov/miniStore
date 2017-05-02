app.factory('productsFactory', ['$http', function($http) {
  var factory = {};

  factory.getProducts = function(callback){
    $http.get('/getPro').then(function(returned_data){
      callback(returned_data.data);
    })
  }

  factory.create = function(newProduct, callback){
  	$http.post('/product', newProduct).then(function(returned_data){
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