import express from "express";
import cors from "cors";
import { expressRouter } from "./api/routes/index";

export const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json({ limit: "16kb" }));

app.use("/api/v1", expressRouter);
