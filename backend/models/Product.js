const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    name: { type: String, required: true},

    image_path: {type: String},
    
    price: {type: Number},
    
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    
    subcategory: { type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory'},

}, { timestamps: true });

const Product = mongoose.model( 'Product', productSchema );

module.exports = Product;