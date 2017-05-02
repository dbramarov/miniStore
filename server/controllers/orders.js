var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');

module.exports = {

	getOrd: function(req, res){
		Order.find({}, function(err, order){
			if(err){
				res.json(err);
			}
			else{
				res.json(order);
			}
		})
	},
	order: function(req, res){
			Product.findOne({name: req.body.product}, function(err, product){
				if(!req.body.quantity){
					res.json(err);
				}
	            else if(product.quantity < req.body.quantity){
	                res.json({error: "Not enough inventory left!"});
	            }
	            else{
	                product.quantity -= req.body.quantity;
	                product.save(function(err){
	                    if(err){
	                        res.json(err);
	                    }
	                })
	                Order.create({customer: req.body.customer, quantity: req.body.quantity, product: req.body.product}, function(err, order){
						if(err){
							console.log(err)
							res.json(err);
						}
						else{
	                    res.json(order); 
	                    }   
					})
				}
			})
		}
}
