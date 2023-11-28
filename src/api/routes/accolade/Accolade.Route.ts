import { Router } from "express";
import { CreateAccoladeController } from "../../../api/controllers/accolade/CreateAccolade.Controller";
import { GetAccoladeController } from "../../../api/controllers/accolade/GetAccoladeController.Controller";

export const AccoladeRouter = Router();

AccoladeRouter.get("/", GetAccoladeController).post(
  "/",
  CreateAccoladeController
);
