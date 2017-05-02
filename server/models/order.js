var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
 customer: {type: String, required: true},
 quantity: {type: Number, required: true},
 product: {type: String, required: true},
}, {timestamps: true})

var Order = mongoose.model('Order', OrderSchema); 