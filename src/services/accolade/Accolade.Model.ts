import { Schema, model } from "mongoose";
import { IAccolade } from "types/Accolade";

const AccoladeSchema: Schema<IAccolade> = new Schema(
  {
    accoladeId: {
      type: Schema.Types.String,
      required: true,
    },
    author: {
      type: Schema.Types.String,
      required: true,
    },
    message: {
      type: Schema.Types.String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const accoladeModel = model<IAccolade>("Accolade", AccoladeSchema);
