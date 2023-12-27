import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  age: Number,
  createdOn: Date,
  password: String,
});

export const UserModel = mongoose.model("user", userSchema);
