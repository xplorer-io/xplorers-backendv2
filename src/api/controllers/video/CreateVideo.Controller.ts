import { RequestHandler, Request, Response } from "express";
import { videoService } from "../../../services/video/VideoService";
import { IVideo } from "types/Video";

export interface IVideoControllerRequestBody {
  videoId?: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
}

export interface IVideoControllerResponse {
  status_code: number;
  message: string;
  video?: IVideo;
}

export const CreateVideoController: RequestHandler = async (
  request: Request,
  response: Response
): Promise<Response<IVideoControllerResponse>> => {
  console.log(
    `Getting request body for CreateAccoladeController ${JSON.stringify(
      request.body
    )}`
  );

  const { videoId, title, description, thumbnailUrl, videoUrl } = request.body;

  const videoResult = await videoService.createVideo({
    videoId: videoId,
    title: title,
    description: description,
    thumbnailUrl: thumbnailUrl,
    videoUrl: videoUrl,
  });

  return response.status(200).json({
    status_code: videoResult.status_code,
    message: videoResult.message,
    video: videoResult.video,
  });
};
