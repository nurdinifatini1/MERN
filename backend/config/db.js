import mongoose from 'mongoose';

const connectDB = async () => {
  try {
   
    console.log('Connecting to MongoDB');
     const conn = await mongoose.connect(process.env.MONGO_URI);
     console.log(`MongoDB Connected: ${conn.connection.host}`);
   } catch (error) {
     console.error('MongoDB Connection Error:', error);
    process.exit(1);
  }
};

export default connectDB;