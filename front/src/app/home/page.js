"use client";
import Header from "../../component/Header/page";
import Body from "../Body/page";
import { useState, useEffect } from "react";
import React from "react";
import { useRouter } from "next/navigation";
import { RxAvatar } from "react-icons/rx";
// import { AiFillFlag } from "react-icons/ai";
import { MdCreateNewFolder } from "react-icons/md";
import Help from "../../component/Help";
export default function home() {
  const [pageStatus, setPageStatus] = useState("welcome");
  const router = useRouter();
  const handleCilke = () => {
    router.push("/quiz?v=");
  };

  return (
    <>
      <div className="relative">
        <Help />
        <div className="pt-[200px] flex justify-center z-1 mb-[100px]">
          <div className="w-[80%] rounded-[20px] border-2 h-[1000px]  flex-wrap flex items-center justify-center flex-row p-[30px] gap-y-[20px] gap-x-[70px]">
            <div className="card bg-[url('/anime.jpg')]">
              <h1 className="tit">ANIME QUIZ</h1>
              <button className="but">PLAY</button>
            </div>
            <div className="card bg-[url('/movie.jpeg')]">
              <h1 className="tit">MOVIE QUIZ</h1>
              <button className="but">PLAY</button>
            </div>
            <div className="card bg-[url('/games.jpeg')]">
              <h1 className="tit">GAME QUIZ</h1>
              <button className="but">PLAY</button>
            </div>
            <div className="card bg-[url('/random.png')]">
              <h1 onClick={handleCilke} className="tit">
                CUSTOM QUIZ
              </h1>
              <button onClick={handleCilke} className="but">
                PLAY
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
