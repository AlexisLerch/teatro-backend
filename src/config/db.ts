import mongoose from "mongoose";
import { config } from "./config";

const connectDB = async () => {
  try {
    await mongoose.connect(config.databaseUrl as string, {
      dbName: "bookmyscreen", // 👈 ESTA LÍNEA ES LA CLAVE
    });

    console.log("Database connected successfully to bookmyscreen");
  } catch (error) {
    console.log("Failed to connect to the database", error);
    process.exit(1);
  }
};

export default connectDB;
