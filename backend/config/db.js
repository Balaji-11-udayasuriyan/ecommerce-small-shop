const mongoose = require('mongoose');

require('dotenv').config();  // ensure environment variable are loaded

const connectDB = async () => {

    try{

        await mongoose.connect(process.env.MONGODB_URI);

        console.log('MongoDB connected successfully',);

    }catch(err){

        console.error('MongoDB connection failed: ', err.message);
        process.exit(1);
    }

};

// module.exports = connectDB;

const disconnectDB = async () => {

    try{

        await mongoose.disconnect();

        console.log('MongoDB disconnected Successfully');

    }catch(err){

        console.error('MongoDB connection failed: ', err.message);
        process.exit(1);
    }

};

module.exports = { connectDB, disconnectDB };

