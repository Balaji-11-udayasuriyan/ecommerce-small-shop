const Cart = require('../../models/Cart');


// Get all items in the cart

const getAllCarts = async ( req, res ) => {

    try{

        const cartItems = await Cart.find().populate('product_id');
        res.status(200).json({ data: cartItems });
    
    }catch(err){

        res.status(500).json({ error: err.message});

    }
};

// Add an item to the cart

const addItemToCart = async ( req, res ) => {

    const { product_id, quantity } = req.body;

    try{

        let cartItem = await Cart.findOne({ product_id });

        if(cartItem){

            cartItem.quantity += quantity || 1;
            await cartItem.save();

        }else{

            cartItem = new Cart({ product_id, quantity });
            await cartItem.save();
        }

        res.status(200).json({ data: cartItem });

    }catch(err){

        res.status(500).json({ error: err.message });

    }
};

// Update quantity of an item in the cart

const updateCartItem = async ( req, res ) => {

    const { id } = req.params;
    const { quantity } = req.body;

    try{

        const cartItem = await Cart.findByIdAndUpdate(

            id,
            { quantity },
            { new : true }
        );

        if (!cartItem) return res.status(404).json({ message: 'Cart item not found'});
        res.status(200).json(cartItem);

    }catch(error){

        res.status(500).json({ error: error.message });
    }
};

// Remove an item from the cart
const removeCartItem = async (req, res) => {
    const { id } = req.params;
    try {
        const cartItem = await Cart.findByIdAndDelete(id);
        if (!cartItem) return res.status(404).json({ message: 'Cart item not found' });
        res.status(200).json({ message: 'Item removed from cart' });
    } catch (error) {
        res.status(500).json({ message: 'Error removing item from cart', error });
    }
};

// Clear all items from the cart
const clearCart = async (req, res) => {
    try {
        await Cart.deleteMany({});
        res.status(200).json({ message: 'Cart cleared' });
    } catch (error) {
        res.status(500).json({ message: 'Error clearing cart', error });
    }
};

module.exports = {
    getAllCarts,
    addItemToCart,
    updateCartItem,
    removeCartItem,
    clearCart
};
