import { GetAccoladeController } from "../../../api/controllers/accolade/GetAccoladeController.controller";
import { Router } from "express";
import { CreateAccoladeController } from "../../../api/controllers/accolade/CreateAccolade.Controller";

export const AccoladeRouter = Router();

AccoladeRouter.get("/", GetAccoladeController).post(
  "/",
  CreateAccoladeController
);
