import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: string,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: string,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullName: {
      type: string,
      required: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: string,
      required: true,
    },
    password: {
      type: string,
      required: [true, "Password is required"],
    },
    refreshToken: {
      type: string,
    },
  },
  {
    timeStamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
