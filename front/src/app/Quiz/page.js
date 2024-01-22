"use client";
import { Checkbox } from "@mui/joy";
import axios from "axios";
import { useState } from "react";
import Help from "../../component/Help";

export default function quiz() {
  const [creatorId, setCreatorId] = useState("");
  const [quiz, setQuiz] = useState({
    question: "",
    category: "",
    0: { answer: "", isCorrect: false },
    1: { answer: "", isCorrect: false },
    2: { answer: "", isCorrect: false },
    3: { answer: "", isCorrect: false },
  });
  const [questionNum, setQuestionNum] = useState(0);
  const [num, setNum] = useState(0);
  console.log("quiz", quiz, quiz.category);
  async function handleSubmit() {
    try {
      await axios.post("http://localhost:8080/createQuiz", {
        category: quiz.category,
        questions: [
          {
            question: quiz.question,
            answers: [quiz[0], quiz[1], quiz[2], quiz[3]],
          },
        ],
      });
      alert("success");
    } catch {
      alert("aldaatai huselt");
    }
  }

  function handleCategory(index, value) {}

  function handleAnswer(index, value) {
    setQuiz((prev) => ({
      ...prev, // spread operator
      [index]: { ...prev[index], answer: value },
    }));
  }

  function handleChecked(index) {
    setQuiz((prev) => ({
      ...prev,
      [index]: { ...prev[index], isCorrect: true },
    }));

    Object.keys(quiz)
      .filter((key) => key !== "question" && key != index)
      .forEach((item) =>
        setQuiz((prev) => ({
          ...prev,
          [item]: { ...prev[item], isCorrect: false },
        }))
      );
  }
  console.log(questionNum);
  return (
    <>
      <Help />
      {questionNum == 0 ? (
        <div>
          <input
            onChange={(e) => {
              if (e.target.value < 1 || e.target.value > 10) e.target.value = 1;
              setNum(e.target.value);
            }}
            type="number"
          ></input>
          <button onClick={() => setQuestionNum(num)} className="text-[200px]">
            asuulta ug
          </button>
        </div>
      ) : (
        <div className=" w-[1000px] h-[400px] flex items-center flex-col mt-[500px] ml-[500px]  fixed gap-[10px]">
          <img />
          <div className="flex gap-[8px]">
            <select
              className="h-[40px]"
              onChange={(e) => {
                setQuiz((perv) => ({
                  ...perv,
                  category: e.target.value,
                }));
              }}
            >
              <option>anime</option>
              <option>game</option>
              <option>movie</option>
            </select>
          </div>

          <div className="flex gap-[8px] justify-center">
            <input
              placeholder="title"
              className="w-[200px] h-[80px] m-"
              onChange={(e) =>
                setQuiz((prev) => ({ ...prev, question: e.target.value }))
              }
              value={quiz.question}
            />
            <input
              type="radio"
              name="con"
              onClick={() => {
                handleChecked(0);
              }}
            />
            <input
              onChange={(e) => {
                handleAnswer(0, e.target.value);
              }}
            />
            <input
              type="radio"
              name="con"
              onClick={() => {
                handleChecked(1);
              }}
            />
            <input
              onChange={(e) => {
                handleAnswer(1, e.target.value);
              }}
            />
            <input
              type="radio"
              name="con"
              onClick={() => {
                handleChecked(2);
              }}
            />
            <input
              onChange={(e) => {
                handleAnswer(2, e.target.value);
              }}
            />
            <input
              type="radio"
              name="con"
              onClick={() => {
                handleChecked(3);
              }}
            />
            <input
              onChange={(e) => {
                handleAnswer(3, e.target.value);
              }}
            />
          </div>

          <button
            onClick={handleSubmit}
            className="text-sky-500 bg-cyan-700 rounded-full w-[100px] h-[60px]"
          >
            Submit
          </button>
        </div>
      )}
    </>
  );
}
