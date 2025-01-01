import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser"
import connectDB from "./config/db.js";
import userRouter from "./routes/authRoutes.js"
import path from "path"
dotenv.config();
connectDB();
const app =express()

const PORT =3000

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use("/api/user", userRouter);
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));