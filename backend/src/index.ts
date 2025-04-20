// importing the liberies
import express, { Router } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// creating a router instance
import loginRouter from "./routes/login";
import contentRouter from "./routes/content";


// creating instance of the liberies
const app = express();
app.use(express.json());
dotenv.config();

// connecting the router
app.use("/login", loginRouter); 
app.use("/content", contentRouter);


const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET must be defined in .env file");
}

app.listen(3000, () => {
  console.log("Server running on port 3000");
});


