import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/index.js";
import { app } from "./app.js";

console.log("NODE_ENV =", process.env.NODE_ENV);

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch((error) => console.error("Error connecting to MongoDB", error));
