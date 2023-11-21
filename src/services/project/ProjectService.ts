import { IProjectResponse, IProjectService } from "types/Project";
import { projectModel } from "./Project.Model";
import {
  IProjectControllerRequestBody,
  IProjectControllerResponse,
} from "../../api/controllers/project/CreateProject.Controller";
import { randomUUID } from "crypto";

class ProjectService implements IProjectService {
  async getProjects(): Promise<IProjectResponse> {
    try {
      console.log("Looking for a existing projects.");

      const projects = await projectModel.find();

      if (!projects || !projects.length) {
        console.log(`No projects found.`);
        return {
          status_code: 404,
          message: "No any projects found",
          projects: [],
        };
      }

      console.log("Successfully fetched projects.");

      return {
        status_code: 200,
        message: "Successfully fetched projects",
        projects: projects,
      };
    } catch (err) {
      const error = err as Error;
      console.log(`Internal server error ${error}`);
      return {
        status_code: 500,
        message: `Internal server error ${error}`,
      };
    }
  }

  async createProject(
    data: IProjectControllerRequestBody
  ): Promise<IProjectControllerResponse> {
    try {
      console.log("Creating project from ProjectService");

      const projectData: IProjectControllerRequestBody = {
        projectId: randomUUID(),
        title: data.title,
        description: data.description,
        thumbnailUrl: data.thumbnailUrl,
        sourceCodeUrl: data.sourceCodeUrl,
      };

      console.log("Creating project model");

      const project = new projectModel(projectData);

      console.log(`Saving user ${JSON.stringify(projectData)}`);

      const savedProject = await project.save();

      if (!savedProject) {
        console.log(`Unable to save project ${JSON.stringify(projectData)}}`);
        return {
          status_code: 500,
          message: "Unable to save project",
        };
      }

      console.log("Successfully created project");

      return {
        status_code: 200,
        message: "Successfully created project",
        project: project,
      };
    } catch (error) {
      return {
        status_code: 200,
        message: "success",
      };
    }
  }
}

export const projectService = new ProjectService();
