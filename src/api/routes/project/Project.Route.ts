import { CreateProjectController } from "../../../api/controllers/project/CreateProject.Controller";
import { GetProjectContrller } from "../../controllers/project/GetProjectController.controller";
import { Router } from "express";

export const ProjectRouter = Router();

ProjectRouter.get("/", GetProjectContrller).post("/", CreateProjectController);
