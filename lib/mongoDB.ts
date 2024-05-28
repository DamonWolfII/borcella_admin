import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDB = async (): Promise<void> => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  const mongoDbUrl = process.env.MONGODB_URL || "";

  if (!mongoDbUrl) {
    console.error("MongoDB connection string (MONGODB_URL) is not defined in environment variables");
    return;
  }

  try {
    await mongoose.connect(mongoDbUrl, {
      dbName: "Borcelle_Admin"
    });

    isConnected = true;
    console.log("MongoDB is connected");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
};
