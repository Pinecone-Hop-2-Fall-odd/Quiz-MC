"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
// import { AudioPlayer } from "@/comp/audio-player";
import { useRouter } from "next/navigation";
import { MOIVE_QUESTIONS } from "../datas/data.js";

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

export default function moive() {
  const Router = useRouter();
  const [answer, setAnswer] = useState([]);

  // const fetchDate = async () => {

  // }
  useEffect(() => {
    const newquestion = shuffle(MOIVE_QUESTIONS);
    setAnswer(newquestion);
    // fetchDate();
  }, [MOIVE_QUESTIONS]);

  // state
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [finish, setFinish] = useState(false);

  if (answer.length === 0) {
    return <p>"...Loading"</p>;
  }

  return (
    <div className=" bg-[url('/anime.jpeg')] bg-cover flex justify-center">
      <div
        style={{ backgroundColor: "rgba(0 , 0, 0, 0.6)" }}
        className=" rounded-[20px] border-[5px] border-[#F4C1D2] flex flex-col mt-[120px] w-[1300px] h-[800px]  "
      >
        {!finish ? (
          <div>
            <div className="flex items-center w-[100%] flex-col h-[300px]">
              <div className="h-[400px]">
                {answer[currentQuestion].type === "image" && (
                  <img
                    className="h-[400px] bg-cover border-[5px] border-[#F4C1D2] mt-[40px] rounded-[15px]"
                    src={`/${answer[currentQuestion].source}`}
                  />
                )}
              </div>
              {answer[currentQuestion].type === "audio" && (
                <AudioPlayer src={`/${answer[currentQuestion].source}`} />
              )}

              <h1 className="mt-[50px] border-b-[2px] mb-[30px] titi text-[50px] text-[#F7424D]">{`${answer[currentQuestion].question}`}</h1>
            </div>

            <div className="w-[100%] flex justify-center  items-center flex-row  ">
              {answer[currentQuestion].answers.map((ans) => {
                return (
                  <div className="h-[50px] flex justify-center  place-content-around">
                    <button
                      onClick={(e) => {
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
