import { RequestHandler, Response, Request } from "express";
import { videoService } from "../../../services/video/VideoService";
import { IVideo } from "types/Video";

interface IGetVideoController {
  status_code: number;
  message: string;
  videos: Array<IVideo>;
}

export const GetVideoController: RequestHandler = async (
  request: Request,
  response: Response
): Promise<Response<IGetVideoController>> => {
  const videoResult = await videoService.getVideos();

  return response.status(videoResult.status_code).json({
    status_code: videoResult.status_code,
    message: videoResult.message,
    videos: videoResult.videos,
  });
};
