import mongoose from "mongoose";

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
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const credential = mongoose.model("credential", userInfo);

export default credential;
