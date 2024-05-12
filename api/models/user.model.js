import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: {
      type: String,
      default:
        "https://firebasestorage.googleapis.com/v0/b/dormdash-69b69.appspot.com/o/UserImage.png?alt=media&token=806170ad-6b5f-4c13-82da-7231c65f315d",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
