import mongoose from "mongoose";
import { Connection_String } from "./config/env.config.js";
export default async function connection() {
  try {
    await mongoose.connect(Connection_String);
    console.log("The connection is stablished with the Database at Port:27017");
  } catch (error) {
    console.log("Failed to connect with the Database");
  }
}
