import { IVideo, IVideoResponse, IVideoService } from "types/Video";
import { videoModel } from "./Video.Model";
import {
  IVideoControllerRequestBody,
  IVideoControllerResponse,
} from "api/controllers/video/CreateVideo.Controller";
import { randomUUID } from "crypto";

class VideoService implements IVideoService {
  async getVideos(): Promise<IVideoResponse> {
    try {
      console.log("Looking for a existing videos.");

      const videos = await videoModel.find();

      if (!videos || !videos.length) {
        console.log(`No videos found.`);
        return {
          status_code: 200,
          message: "No any videos found",
          videos: [],
        };
      }

      console.log("Successfully fetched videos.");

      return {
        status_code: 200,
        message: "Successfully fetched videos.",
        videos: videos,
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

  async createVideo(
    data: IVideoControllerRequestBody
  ): Promise<IVideoControllerResponse> {
    try {
      console.log("Checking if video already exists");

      const existingVideo = await videoModel.findOne({
        videoId: data.videoId,
      });

      console.log(existingVideo);

      if (existingVideo) {
        console.log(existingVideo);

        console.log("Video already exists. Nothing to do here :)");
        return {
          status_code: 400,
          message: "Success",
        };
      }

      console.log("Creating video from videoService");

      const videoData: IVideoControllerRequestBody = {
        videoId: randomUUID(),
        title: data.title,
        description: data.description,
        thumbnailUrl: data.thumbnailUrl,
        videoUrl: data.videoUrl,
      };

      console.log("Creating video model");

      const video = new videoModel(videoData);

      console.log(`Saving video ${JSON.stringify(videoData)}`);

      const savedVideo = await video.save();
      console.log(savedVideo);

      if (!savedVideo) {
        console.log(`Unable to save video ${JSON.stringify(videoData)}}`);
        return {
          status_code: 500,
          message: "Unable to save video",
        };
      }

      console.log("Successfully created video");

      return {
        status_code: 200,
        message: "Successfully created video",
        video: video,
      };
    } catch (error) {
      console.log(error);
      return {
        status_code: 500,
        message: "Server error",
      };
    }
  }
}

export const videoService = new VideoService();
