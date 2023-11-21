import { Router } from "express";
import { VideoRouter } from "./video/Video.Route";

export const expressRouter = Router();

// Video router
expressRouter.use("/videos", VideoRouter);
