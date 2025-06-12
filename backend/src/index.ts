// importing the liberies
import express, { Router } from "express";
import dotenv from "dotenv";
import cors from "cors";
// creating a router instance
import loginRouter from "./routes/auth";
import contentRouter from "./routes/content";


// creating instance of the liberies
const app = express();
app.use(express.json());
dotenv.config();
// app.use(cors);
app.use(cors({
  origin: 'http://127.0.0.1:5173',  // allow your frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // allowed methods
}));

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


