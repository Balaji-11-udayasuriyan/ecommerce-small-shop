const Order = require('../../models/Order');
const OrderItem = require('../../models/OrderItem');

// Create a new order
const createOrder = async (req, res) => {
    try {
        const { user_id, items, shipping_address } = req.body;

        // Create Order Items
        let total_price = 0;
        const orderItems = await Promise.all(
            items.map(async item => {
                const orderItem = new OrderItem({
                    order_id: null,  // Will be updated after Order is created
                    product_id: item.product_id,
                    quantity: item.quantity,
                    price: item.price
                });
                total_price += item.quantity * item.price;
                await orderItem.save();
                return orderItem._id;
            })
        );

        // Create the Order
        const order = new Order({
            user_id,
            items: orderItems,
            total_price,
            shipping_address
        });
        await order.save();

        // Update order_id in each OrderItem
        await OrderItem.updateMany({ _id: { $in: orderItems } }, { order_id: order._id });

        res.status(201).json({ message: 'Order created successfully', order });
    } catch (error) {
        res.status(500).json({ message: 'Error creating order', error });
    }
};

// Get all orders
const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find()
            .populate('items')
            .populate('user_id', 'name email');  // Assuming User has name and email fields
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders', error });
    }
};

// Get a single order by ID
const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id)
            .populate('items')
            .populate('user_id', 'name email');
        if (!order) return res.status(404).json({ message: 'Order not found' });
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching order', error });
    }
};

// Update order status
const updateOrder = async (req, res) => {
    try {
        const { status } = req.body;
        const order = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
        if (!order) return res.status(404).json({ message: 'Order not found' });
        res.status(200).json({ message: 'Order status updated', order });
    } catch (error) {
        res.status(500).json({ message: 'Error updating order status', error });
    }
};

// Delete an order
const deleteOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        if (!order) return res.status(404).json({ message: 'Order not found' });

        // Delete all associated order items
        await OrderItem.deleteMany({ order_id: order._id });

        res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting order', error });
    }
};

module.exports = {
    createOrder,
    getAllOrders,
    getOrderById,
    updateOrder,
    deleteOrder,
};
