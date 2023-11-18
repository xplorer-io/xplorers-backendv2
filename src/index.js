// require("dotenv").config();
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";

dotenv.config();

const app = express();
const port = 3000;

connectDB();
// app.get("/", (req, res) => {
//   res.send("Hello, TypeScript with Express!");
// });

// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });
