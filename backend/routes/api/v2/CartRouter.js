const express = require('express');

const router = express.Router();

const {
    getAllCarts,
    addItemToCart,
    updateCartItem,
    removeCartItem,
    clearCart
} = require('../../../controllers/v2/CartController');

// Define routes for each cart operation
router.get('/', getAllCarts);          // Get all items in the cart
router.post('/', addItemToCart);       // Add an item to the cart
router.put('/:id', updateCartItem);    // Update quantity of an item in the cart
router.delete('/:id', removeCartItem); // Remove an item from the cart
router.delete('/', clearCart); 

module.exports = router;
