import { Schema, model } from "mongoose";
import { IUser } from "types/User";

const UserSchema: Schema<IUser> = new Schema(
  {
    userId: {
      type: Schema.Types.String,
      required: true,
    },
    name: {
      type: Schema.Types.String,
      required: false,
    },
    email: {
      type: Schema.Types.String,
      required: true,
    },
    phone: {
      type: Schema.Types.String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export const userModel = model<IUser>("User", UserSchema);
