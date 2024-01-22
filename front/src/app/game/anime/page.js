"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
// import { AudioPlayer } from "@/comp/audio-player";
import { useRouter } from "next/navigation";
import { ANIME_QUESTIONS } from "../datas/data.js";

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

export default function PlayingQuiz() {
  const Router = useRouter();
  const [answer, setAnswer] = useState([]);

  // const fetchDate = async () => {

  // }
  useEffect(() => {
    const newquestion = shuffle(ANIME_QUESTIONS);
    setAnswer(newquestion);
    // fetchDate();
  }, [ANIME_QUESTIONS]);

  // state
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [finish, setFinish] = useState(false);

  if (answer.length === 0) {
    return <p>"...Loading"</p>;
  }

  return (
    <div className=" bg-[url('/anime.jpeg')] bg-cover h-[100vh] flex justify-center">
      <div
        style={{ backgroundColor: "rgba(0 , 0, 0, 0.3)" }}
        className=" rounded-[20px] border-[5px] border-[#F4C1D2] flex flex-col mt-[120px] w-[1300px] h-[800px]  "
      >
        {!finish ? (
          <div className=" flex flex-col ">
            <div className="flex items-center w-[100%] flex-col h-[300px] ">
              <div className="h-[400px]">
                <h1 className="ans mt-[50px] border-b-[2px] mb-[30px] titi text-[50px] items-center text-[#61A2DA]">{`${answer[currentQuestion].question}`}</h1>
                {answer[currentQuestion].type === "image" && (
                  <img
                    className="h-[400px] bg-cover border-[5px] border-[#F4C1D2] mt-[40px] rounded-[15px] "
                    src={`/${answer[currentQuestion].source}`}
                  />
                )}
              </div>
              {answer[currentQuestion].type === "audio" && (
                <AudioPlayer src={`/${answer[currentQuestion].source}`} />
              )}
            </div>

            <div className="w-[100%] flex justify-center  items-center flex-row  mt-[300px] ">
              {answer[currentQuestion].answers.map((ans) => {
                return (
                  <div className="h-[50px] flex justify-center  place-content-around">
                    <button
                      onClick={() => {
                        if (currentQuestion == 14) {
                          setFinish(true);
                        }
                        setCurrentQuestion(currentQuestion + 1);
                      }}
                      className="w-[30px] flex items-center justify-center cursor-pointer h-[30px] mt-[10px] mr-[10px] ml-[20px] bg-[#F4C1D2] rounded-full"
                    >
                      <div className="w-[25px] h-[25px] bg-black rounded-full transition duration-700 hover:bg-[#61BFB3]"></div>
                    </button>
                    {console.log(ans.answer)}
                    <p className="ans text-[40px]  text-white">{ans.answer}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div>
            <p className="bg-pink-400 text-white">done</p>
          </div>
        )}
      </div>
    </div>
  );
}
