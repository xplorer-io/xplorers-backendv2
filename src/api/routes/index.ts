import { Router } from "express";
import { VideoRouter } from "./video/Video.Route";
import { ProjectRouter } from "./project/Project.Route";
import { AccoladeRouter } from "./accolade/Accolade.Route";

export const expressRouter = Router();

// Video router
expressRouter.use("/videos", VideoRouter);

// Project router
expressRouter.use("/projects", ProjectRouter);

// Accolade router
expressRouter.use("/accolades", AccoladeRouter);
