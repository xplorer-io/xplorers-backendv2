import { Schema, model } from "mongoose";

import { IVideo } from "types/Video";

const VideoSchema: Schema = new Schema(
  {
    videoId: {
      type: Schema.Types.String,
      required: true,
      auto: true,
    },
    title: {
      type: Schema.Types.String,
      required: true,
    },
    description: {
      type: Schema.Types.String,
      required: true,
    },
    thumbnailUrl: {
      type: Schema.Types.String,
      required: true,
    },
    videoUrl: {
      type: Schema.Types.String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const videoModel = model<IVideo>("Video", VideoSchema);
