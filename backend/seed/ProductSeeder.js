const { faker } = require('@faker-js/faker');

const Product = require('../models/Product'); // Import the Product model
const Category = require('../models/Category'); // Import the Category model to fetch category IDs
const SubCategory = require('../models/SubCategory'); // Import the SubCategory model to fetch subcategory IDs

// Function to seed fake products
async function seedProducts() {
    try {
        // Clear existing product data
        await Product.deleteMany({});

        // Fetch all category and subcategory IDs
        const categories = await Category.find();
        const subcategories = await SubCategory.find();
        
        const categoryIds = categories.map(category => category._id);
        const subcategoryIds = subcategories.map(subcategory => subcategory._id);

        if (categoryIds.length === 0 || subcategoryIds.length === 0) {
            console.log("No categories or subcategories found. Please seed them first.");
            return;
        }

        // Create an array to hold product instances
        const products = [];

        // Create 20 fake products
        for (let i = 0; i < 20; i++) {
            products.push({

                name: faker.commerce.productName(),  // Generates a random product name
                image_path: faker.image.urlPicsumPhotos({ width: 640, height: 480, category: 'products' }), // Generates a random image URL
                price: parseInt(faker.commerce.price(), 10), // Generates a random integer price
                category: faker.helpers.arrayElement(categoryIds), // Assigns a random category ID
                subcategory: faker.helpers.arrayElement(subcategoryIds) // Assigns a random subcategory ID

            });
        }

        // Insert all products at once for better performance
        await Product.insertMany(products);
        console.log('Products seeded successfully');

    } catch (err) {

        console.error('Error seeding products:', err);

    }
}

// Export the seedProducts function for use in other files
module.exports = seedProducts;
