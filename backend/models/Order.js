const mongoose = require('mongoose');
const OrderStatus = require('../enums/OrderStatus');

const OrderSchema = new mongoose.Schema({

    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

    // Referencing multiple OrderItems linked to this order
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'OrderItem' }],

    total_price: { type: Number, required: true },  // Calculated total price of the order

    status: {
        
        type: String,
        enum: Object.values(OrderStatus),
        default: OrderStatus.PENDING
    },

    shipping_address: {

        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        postal_code: { type: String, required: true },
        country: { type: String, required: true }
    },

    placed_at: { type: Date, default: Date.now }

}, {timestamps: true}); 

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
