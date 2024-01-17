import express from "express";
import { createQuiz, getAllQuiz } from "../controllers/quiz-controller.js";

export const quizRouter = express.Router();

quizRouter.post("/playQuiz", getAllQuiz);
quizRouter.post("/createQuiz", createQuiz);
