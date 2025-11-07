import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from config.env file
dotenv.config({ path: path.join(__dirname, '..', 'config.env') });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI is not defined in config.env file');
  console.log('Please create a config.env file with your MongoDB connection string');
  process.exit(1);
}

const connectDB = async () => {
  try {
    console.log('🔗 Connecting to MongoDB...');
    console.log('📍 Connection string:', MONGODB_URI.replace(/\/\/.*@/, '//***:***@')); // Hide credentials in logs
    
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('✅ MongoDB connected successfully');
    console.log('📊 Database:', mongoose.connection.name);
    console.log('🌐 Host:', mongoose.connection.host);
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    console.log('💡 Please check your MongoDB connection string in config.env');
    process.exit(1);
  }
};

export default connectDB;
