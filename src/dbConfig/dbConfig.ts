import { connect } from "http2";
import mongoose from "mongoose";

export async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB connected");
    });

    connection.on("error", (error) => {
      console.error("MongoDB connection error:", error);
      process.exit();
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

