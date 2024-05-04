import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config();

// Export the environment variables

const config = {
    port: parseInt(process.env.PORT || '8000'),
    mongoUri: process.env.MONGODB_URI || 'mongodb+srv://nanduyadavrny:1JelPuyvhKWF0MAW@matricedb.bdh1n2g.mongodb.net/',
    environment: process.env.NODE_ENV || 'development'
};

export default config;