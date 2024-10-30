const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');
const Brand = require('../models/Brand'); // Import the Brand model

// Function to seed fake brands
async function seedBrands() {
    try {
        // Clear existing brand data
        await Brand.deleteMany({});

        // Create an array to hold brand instances
        const brands = [];

        // Create 20 fake brands
        for (let i = 0; i < 20; i++) {
            brands.push({
                name: faker.company.name(),  // Generates a random brand name
                image_path: faker.image.avatar() // Generates a random image URL
            });
        }

        // Insert all brands at once for better performance
        await Brand.insertMany(brands);
        console.log('Brands seeded successfully');
    } catch (err) {
        console.error('Error seeding brands:', err);
    }
}

// Export the seedBrands function for use in other files
module.exports = seedBrands;
