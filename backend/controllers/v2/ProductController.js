const Product = require('../../models/Product');

exports.getAllProducts = async (req, res) =>{

    try{

        const products = await Product.find();

        res.status(200).json({ data: products});

    }catch(err){

        res.status(500).json({ error: err.message });

    }
    
}