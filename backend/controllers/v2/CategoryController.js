const Category = require('../../models/Category');

// get all categories

exports.getAllCategories = async (req, res) => {

    try{
        const categories = await Category.find();
        res.status(200).json({data: categories});

    }catch (error){
        res.status(500).json({error: error.message});
    }

};