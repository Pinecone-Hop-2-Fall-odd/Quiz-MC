"use client";
import { QuizModel } from "../models/quiz.model.js";

export const createQuiz = async (req, res) => {
  try {
    const { questions, creatorId, category } = req.body;
    const quiz = await QuizModel.create({ questions, creatorId, category });

    if (quiz) {
      res.status(200).json({ data: quiz, message: "success" });
    }
  } catch (err) {
    res.status(400).json({ message: err });
  }
};
export const getAllQuiz = async (req, res) => {
  try {
    const quizzes = await QuizModel.find();
    res.status(200).json({ quizzes });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};
export const getQuiz = async (req, res) => {
  try {
    const { quizId } = req.params;

    const quiz = await QuizModel.findById(quizId);

    res.status(200).json({ quiz });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

export const checkQuiz = async (req, res) => {
  try {
    const { quizId } = req.params;
    const { answers } = req.body;

    let isPass = true;

    const quiz = await QuizModel.findById(quizId);

    // {key1: value, key2: value}
    // ["key1", "key2"]

    Object.keys(answers).map((question) => {
      const answersQuestion = quiz.questions.filter(
        (q) => q.question === question
      )[0];
      const answer = answersQuestion.answers.find(
        ({ answer }) => answer === answers[question]
      );

      if (!answer.isCorrect) {
        isPass = false;
      }
    });

    if (isPass) {
      res.status(200).json({ message: "success" });
    } else {
      res.status(400).json({ message: "failed" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err });
  }
};
// export const editQuiz = async () => { }
