const Brand = require('../../models/Brand');

exports.getAllBrands = async (req, res) => {
    try {
        
        const brands = await Brand.find();
        res.status(200).json({ data: brands });

    } catch (error) {

        res.status(500).json({ error: error.message });
    }
};
