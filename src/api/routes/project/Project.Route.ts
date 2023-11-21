import { GetProjectContrller } from "../../controllers/project/GetProjectController.controller";
import { Router } from "express";

export const ProjectRouter = Router();

ProjectRouter.get("/", GetProjectContrller);
