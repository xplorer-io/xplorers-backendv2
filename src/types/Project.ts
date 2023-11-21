import { IResponse } from "./Response";

export interface IProject {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  sourceCodeUrl: string;
  createdAt: number;
  updatedAt: number;
}

export interface IProjectResponse extends IResponse {
  projects?: Array<IProject>;
}

export interface IProjectService {
  getProjects: () => Promise<IProjectResponse>;
}
