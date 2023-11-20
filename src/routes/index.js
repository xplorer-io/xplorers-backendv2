import { Router } from "express";
import { playlistsRouter } from "./playlist/getPlaylist.js";
export const router = Router();

router.get("/", (req, res) => {
  res.send("Hello world!");
});

router.use("/playlists", playlistsRouter);
