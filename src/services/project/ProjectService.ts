import { IProjectResponse, IProjectService } from "types/Project";
import { projectModel } from "./Project.Model";

class ProjectService implements IProjectService {
  async getProjects(): Promise<IProjectResponse> {
    try {
      console.log("Looking for a existing projects.");

      const videos = await projectModel.find();

      if (!videos || !videos.length) {
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
        projects: videos,
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
}

export const projectService = new ProjectService();
