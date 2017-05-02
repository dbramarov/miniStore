var mongoose = require('mongoose');
var customers = require('../controllers/customers.js');
var products = require('../controllers/products.js');
var orders = require('../controllers/orders.js');

module.exports = function(app){

	//************CUSTOMERS******************//
	app.get('/getCust', function(req, res){
		customers.getCust(req, res);
	});

	app.post('/customer', function(req, res){
		customers.create(req, res);
	});

	app.delete('/remove/:id', function(req, res){
		customers.remove(req, res);
	})

	//************PRODUCTS******************//
	app.post('/product', function(req, res){
		products.create(req, res);
	})

	app.get('/getPro', function(req, res){
		products.getPro(req, res);
	});

	//*************ORDERS*******************//
	app.post('/order', function(req, res){
		orders.order(req, res);
	})

	app.get('/getOrd', function(req, res){
		orders.getOrd(req, res);
	});	

}