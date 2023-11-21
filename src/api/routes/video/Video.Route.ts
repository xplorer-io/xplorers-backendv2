import { GetVideoController } from "../../../api/controllers/video/GetVideoController.Controller";
import { Router } from "express";

export const VideoRouter = Router();

VideoRouter.get("/", GetVideoController);
