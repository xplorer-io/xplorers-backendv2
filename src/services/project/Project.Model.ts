import { Schema, model } from "mongoose";
import { IProject } from "types/Project";

const ProjectSchema: Schema<IProject> = new Schema(
  {
    id: {
      type: Schema.Types.String,
      required: true,
    },
    title: {
      type: Schema.Types.String,
      required: true,
    },
    description: {
      type: Schema.Types.String,
      required: true,
    },
    sourceCodeUrl: {
      type: Schema.Types.String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const projectModel = model<IProject>("Project", ProjectSchema);
