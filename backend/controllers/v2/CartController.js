const Cart = require('../../models/Cart');

exports.getAllCarts = async ( req, res ) => {

    try{

        const carts = await Cart.find();

        res.status(200).json({ data: carts});

    }catch(err){

        res.status(500).json({ error: err.message });
    }
};