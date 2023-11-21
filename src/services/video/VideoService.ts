import { IVideoResponse, IVideoService } from "types/Video";
import { videoModel } from "./Video.Model";

class VideoService implements IVideoService {
  async getVideos(): Promise<IVideoResponse> {
    try {
      console.log("Looking for a existing videos.");

      const videos = await videoModel.find();

      if (!videos || !videos.length) {
        console.log(`No videos found.`);
        return {
          status_code: 404,
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
}

export const videoService = new VideoService();
