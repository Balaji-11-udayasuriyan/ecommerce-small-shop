const express = require('express');
const { connectDB, disconnectDB } = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');

// Import routes
const categoryRoutes = require('./routes/api/v2/CategoryRouter');
const brandRoutes = require('./routes/api/v2/BrandRouter');
const subcategoryRoutes = require('./routes/api/v2/SubCategoryRouter');
const productRouter = require('./routes/api/v2/ProductRouter');
const cartRouter = require('./routes/api/v2/CartRouter');
const orderRouter = require('./routes/api/v2/OrderRouter');
const authRouter = require('./routes/api/v2/AuthRouter');


const app = express();

// Initialize dotenv to access environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    res.send('API is running...');
});

// Routes 
app.use('/api/categories', categoryRoutes);
app.use('/api/brands', brandRoutes);
app.use('/api/subcategories',subcategoryRoutes);
app.use('/api/products',productRouter);
app.use('/api/carts',cartRouter);
app.use('/api/orders', orderRouter);
app.use('/api/auth', authRouter);


const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '0.0.0.0';

// Start the server
const server = app.listen(PORT, () => {
    console.log(`Server running on http://${HOST}:${PORT}`);
});

// Handle graceful shutdown
const shutdown = async () => {
    console.log('Shutting down gracefully...');
    await disconnectDB(); // Disconnect from MongoDB
    server.close(() => {
        console.log('Server closed.');
        process.exit(0); // Exit the process
    });
};

// Listen for termination signals
process.on('SIGINT', shutdown); // Ctrl+C
