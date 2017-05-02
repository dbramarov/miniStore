app.factory('ordersFactory', ['$http', function($http) {
  var factory = {};

  factory.getOrders = function(callback){
    $http.get('/getOrd').then(function(returned_data){
      callback(returned_data.data);
    })
  } 

  factory.order = function(newOrder, callback){
  	$http.post('/order', newOrder).then(function(returned_data){
  		if(typeof(callback) == "function"){
  			console.log(returned_data.data);
        	callback(returned_data.data);
        }
  	})
  	.catch(function(err){
   	console.log(err);
    });
  }

  return factory;
}]);