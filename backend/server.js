import express from "express";
import { PORT } from "./config/env.config.js";
export const app = express();

export default async function serverStarter() {
  try {
    app.listen(PORT, () => {
      console.log("The Server is Successfully Started ");
    });
  } catch (error) {
    console.log("Failed to Start the server");
  }
}
