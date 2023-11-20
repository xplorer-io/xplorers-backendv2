import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { router } from "./routes/index.js";

export const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

app.use("/", router);
