import express from "express";
import { createQuiz, playQuiz } from "../controllers/quiz-controller.js";

export const quizRouter = express.Router();

quizRouter.post("/playQuiz", playQuiz);
quizRouter.post("/createQuiz", createQuiz);
