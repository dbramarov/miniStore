var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = {

	getCust: function(req, res){
		Customer.find({}, function(err, customer){
			if(err){
				res.json(err);
			}
			else{
				res.json(customer);
			}
		})
	},

	remove: function(req, res){
		Customer.deleteOne({_id: req.params.id}, function(err, customer){
			if(err){
				res.json(err)
			}
			else{
				res.json({customer})
			}
		})
	},

	create: function(req, res){
		console.log(req.body)
		Customer.findOne({name: req.body.name}, function(err, customer){
			if(err){
				res.json(err);
			}
			else if (!customer){
				Customer.create({name: req.body.name}, function(err, customer){
					if(err){
						res.json(err);
					}
					else{
						res.json(customer);
					}
				})
			}
			else{
				res.json({error: "Customer Already Exists!"});
			}
		})
	}
}
