import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user-routes.js";
import { quizRouter } from "./routes/quiz-routes.js";
const app = express();

app.use(cors());
app.use(express.json());

app.use(userRouter);
app.use(quizRouter);

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://munkhuubaraa:Pfqho0icnXfs8qre@cluster0.iym4q6r.mongodb.net/"
  );
  console.log("connected database");
};
connectDB();
app.listen(8080, () => {
  "http://localhost:8080/user";
});
