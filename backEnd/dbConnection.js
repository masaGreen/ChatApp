import mongoose from "mongoose";
import { config } from "dotenv";
config();
const dbConnection = mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("mongo db connected successfully");
  })
  .catch((error) => console.log(error));

export default dbConnection;
