var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = {

	getPro: function(req, res){
		Product.find({}, function(err, product){
			if(err){
				res.json(err);
			}
			else{
				res.json(product);
			}
		})
	},

	create: function(req, res){
		console.log(req.body)
		Product.findOne({name: req.body.name}, function(err, product){
			if(err){
				res.json(err);
			}
			else if (!product){
				Product.create({name: req.body.name, image: req.body.img, description: req.body.desc, quantity: req.body.quantity}, function(err, product){
					if(err){
						res.json(err);
					}
					else{
						res.json(product);
					}
				})
			}
			else{
				res.json({error: "Product Already Exists!"});
			}
		})
	}
}
