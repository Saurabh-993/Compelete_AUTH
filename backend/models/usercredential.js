import mongoose from "mongoose";
import { stringify } from "querystring";

const userInfo = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "please provide the username"],
    },
    email: {
      type: String,
      required: [true, "Please provide an valid EmailID"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide an Password for the Email"],
    },
    role: {
      type: String,
      required: [true, "You should have a role "],
      enum: ["user", "admin", "manager"],
      default: "user",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const credential = mongoose.model("credential", userInfo);

export default credential;
