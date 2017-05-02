var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
 name: {type: String, required: true},
 image: {type: String, required: true},
 description: {type: String, required: true},
 quantity: {type: Number, required: true},
}, {timestamps: true})

var Product = mongoose.model('Product', ProductSchema); 