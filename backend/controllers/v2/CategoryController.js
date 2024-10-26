const Category = require('../../models/Category');

exports.getAllCategories = async (res,req) =>{

    try{

        const categories = await Category.find();
        
        res.status(200).json({data: categories});

    }catch(err){

        res.status(500).json({error: err.message});

    }
}

