import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";

dotenv.config();
const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

// DB connection
connectDB();

// Routes
app.get("/", (_: Request, res: Response) => {
  res.send("API is running...");
});

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
