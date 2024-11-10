const mongoose = require('mongoose');

const OrderItemSchema = new mongoose.Schema({

    order_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },

    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },

    quantity: { type: Number, required: true },
    
    price: { type: Number, required: true }  // Price at the time of order

}, { timestamps: true });

const OrderItem = mongoose.model('OrderItem', OrderItemSchema);

module.exports = OrderItem;
