import { RequestHandler, Request, Response } from "express";
import { IProject } from "types/Project";
import { projectService } from "../../../services/project/ProjectService";

export interface IProjectControllerRequestBody {
  projectId: string;
  title: string;
  description: string;
  sourceCodeUrl: string;
}

export interface IProjectControllerResponse {
  status_code: number;
  message: string;
  project?: IProject;
}

export const CreateProjectController: RequestHandler = async (
  request: Request,
  response: Response
): Promise<Response<IProjectControllerResponse>> => {
  console.log(
    `Getting request body for CreateProjectController ${JSON.stringify(
      request.body
    )}`
  );

  const { projectId, title, description, sourceCodeUrl } = request.body;

  const projectResult = await projectService.createProject({
    projectId: projectId,
    title: title,
    description: description,
    sourceCodeUrl: sourceCodeUrl,
  });

  if (projectResult.status_code === 200) {
    return response.status(200).json({
      status_code: projectResult.status_code,
      message: projectResult.message,
      project: projectResult.project,
    });
  } else {
    return response.status(projectResult.status_code).json({
      status_code: projectResult.status_code,
      message: projectResult.message,
    });
  }
};
