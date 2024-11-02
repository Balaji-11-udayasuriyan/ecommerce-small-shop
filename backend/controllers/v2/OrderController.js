const Order = require('../../models/Order');

const getAllOrders = async ( req, res ) => {

    try{

        const orders = await Order.find(req.query).populate('user_id').populate('item.product_id');

        res.status(200).json({ data: orders});

    }catch(err){

        res.status(500).json({ error: err.message });

    }
}; 


// Create a new order

const createOrder = async (req, res) => {

    try{

        const orderData = req.body;
        const order = new Order(orderData);
        const savedOrder = await order.save();
        res.status(201).json({ data: savedOrder});

    }catch(err){

        res.status(500).json({ error: err.message});
        // res.status(400).json({ message: 'Error creating order', error: error.message });
    }
};

// Get an order by ID

const getOrderById = async (req, res) => {

    try{

        const order = await Order.findById(req.params.id).populate('user_id').populate('items.product_id')

        if (!order){

            return res.status(404).json({ message: 'Order not found'});

        }
        res.status(200).json({ data:order });

    }catch(err){

        res.status(400).json({ message: 'Error fetching order', error: err.message});
    }
};

// Update an order by ID

const updateOrder = async (req, res) => {

    try{

        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updateOrder){

            return res.status(404).json({ message: 'Order not found'});


        }
        res.status(200).json({ data: updatedOrder});

    }catch(error){

        res.status(400).json({ message: 'Error updating order', error: error.message});
    }

};

// Delete an order by ID

const deleteOrder = async (req, res) => {

    try{

        const deletedOrder = await Order.findByIdAndDelete(req.params.id);
        
        if(!deletedOrder){
            
            return res.status(404).json({ message: 'Order not found'});

        }

        res.status(200).json({ message: 'Order deleted successfully'});

    }catch(error){

        res.status(400).json({ message: 'Error deleting order', error: error.message});
    }
};

module.exports = {
    createOrder,
    getOrderById,
    updateOrder,
    deleteOrder,
    getAllOrders,
};