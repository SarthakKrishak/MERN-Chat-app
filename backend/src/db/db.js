import mongoose from 'mongoose'

const connectDB = async () => {
  try {

    if (!process.env.MONGODB_URI) {
      console.log("MONGODB_URI is not defined in .env file");
    }

    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);

  } catch (error) {
    console.log("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;