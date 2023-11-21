import {
  IVideoControllerRequestBody,
  IVideoControllerResponse,
} from "api/controllers/video/CreateVideo.Controller";
import { IResponse } from "./Response";

export interface IVideo {
  videoId: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  createdAt: number;
  updatedAt: number;
}

export interface IVideoResponse extends IResponse {
  videos?: Array<IVideo>;
}

export interface IVideoService {
  getVideos: () => Promise<IVideoResponse>;
  createVideo: (
    data: IVideoControllerRequestBody
  ) => Promise<IVideoControllerResponse>;
}
