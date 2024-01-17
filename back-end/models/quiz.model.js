import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  questions: [
    {
      question: String,
      answers: [
        {
          answer: String,
          isCorrect: Boolean,
        },
      ],
    },
  ],
  category: String,
  creatorId: mongoose.Types.ObjectId,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const QuizModel = mongoose.model("quiz", quizSchema);
