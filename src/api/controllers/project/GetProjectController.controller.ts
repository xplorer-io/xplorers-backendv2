import { RequestHandler, Response, Request } from "express";
import { projectService } from "../../../services/project/ProjectService";
import { IProject } from "types/Project";

interface IGetProjectController {
  status_code: number;
  message: string;
  projects: Array<IProject>;
}

export const GetProjectContrller: RequestHandler = async (
  request: Request,
  response: Response
): Promise<Response<IGetProjectController>> => {
  const videoResult = await projectService.getProjects();

  return response.status(videoResult.status_code).json({
    status_code: videoResult.status_code,
    message: videoResult.message,
    projects: videoResult.projects,
  });
};
