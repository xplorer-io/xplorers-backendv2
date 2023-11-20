import { Router } from "express";
import { playlistsController } from "../../controllers/playlist/index.js";

export const playlistsRouter = Router();

playlistsRouter.get("/", playlistsController);
