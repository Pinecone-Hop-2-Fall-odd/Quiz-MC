"use client";
import Header from "../Header/page";
import Body from "../Body/page";
import { useState, useEffect } from "react";
export default function home() {
  const [pageStatus, setPageStatus] = useState("welcome");

  if (pageStatus == "welcome") {
    return (
      <div>
        <div>
          <div className="h-[130px] w-[100%] bg-[#83a2ff] border-b-2 border-black border-solid flex items-center justify-between">
            <div className="logo">
              <img src="logo.jpeg" width={122} height={130} />
              <h2 className="Poster-name">Quiz</h2>
            </div>
            <div>
              <img
                src="galaxy_303714-4260.avif"
                alt="galaxy"
                width={120}
                height={120}
                className=" animate-spin rounded-full"
              />
            </div>
            <div className="flex items-center flex-row-reverse gap-8">
              <img
                onClick={() => setPageStatus("profile")}
                src="image-from-rawpixel-id-6012974-png (1).png/"
                width={80}
                height={80}
              />
              <a onClick={() => setPageStatus("anime")}>anime</a>
              <a onClick={() => setPageStatus("game")}>game</a>
              <a onClick={() => setPageStatus("movie")}>movie</a>
              <a>create</a>
            </div>
          </div>
          <div className="flex gap-[34px]">
            <div className="h-[1045px] bg-[#83a2ff] w-[200px]">
              <h1 className=" border-black border-b-2 border-solid ">home</h1>
              <h1>Your Quiz's</h1>
            </div>
            <div>
              <h1 className="font-black text-white text-[200px] ">
                Wellcome to Quiz page
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (pageStatus == "movie") {
    return (
      <div>
        <div>
          <div className="h-[130px] w-[100%] bg-[#83a2ff] border-b-2 border-black border-solid flex items-center justify-between">
            <div className="logo">
              <img src="logo.jpeg" width={122} height={130} />
              <h2 className="Poster-name">Quiz</h2>
            </div>
            <div>
              <img
                src="galaxy_303714-4260.avif"
                alt="galaxy"
                width={120}
                height={120}
                className=" animate-spin rounded-full"
              />
            </div>
            <div className="flex items-center flex-row-reverse gap-8">
              <img
                onClick={() => setPageStatus("profile")}
                src="image-from-rawpixel-id-6012974-png (1).png/"
                width={80}
                height={80}
              />
              <a onClick={() => setPageStatus("anime")}>anime</a>
              <a onClick={() => setPageStatus("game")}>game</a>
              <a onClick={() => setPageStatus("movie")}>movie</a>
              <a>create</a>
            </div>
          </div>
          <div className="flex ">
            <div className="h-[1045px] bg-[#83a2ff] w-[200px]">
              <h1 className=" border-black border-b-2 border-solid ">home</h1>
              <h1>Your Quiz's</h1>
            </div>
            <div className="bg-[#200E3A] w-[100%] h-[1045px] ">
              <div className="bg-[#7B66FF] w-[147vh] h-[700px] ml-[125px] mt-[100px]"></div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (pageStatus == "game") {
    return (
      <div>
        <div>
          <div className="h-[130px] w-[100%] bg-[#83a2ff] border-b-2 border-black border-solid flex items-center justify-between">
            <div className="logo">
              <img src="logo.jpeg" width={122} height={130} />
              <h2 className="Poster-name">Quiz</h2>
            </div>
            <div>
              <img
                src="galaxy_303714-4260.avif"
                alt="galaxy"
                width={120}
                height={120}
                className=" animate-spin rounded-full"
              />
            </div>
            <div className="flex items-center flex-row-reverse gap-8">
              <img
                onClick={() => setPageStatus("profile")}
                src="image-from-rawpixel-id-6012974-png (1).png/"
                width={80}
                height={80}
              />
              <a onClick={() => setPageStatus("anime")}>anime</a>
              <a>game</a>
              <a onClick={() => setPageStatus("movie")}>movie</a>
              <a>create</a>
            </div>
          </div>
          <div className="flex ">
            <div className="h-[1045px] bg-[#83a2ff] w-[200px]">
              <h1 className=" border-black border-b-2 border-solid ">home</h1>
              <h1>Your Quiz's</h1>
            </div>
            <div className="bg-[#200E3A] w-[100%] h-[1045px] ">
              <div className="bg-[#7B66FF] w-[147vh] h-[700px] ml-[125px] mt-[100px]"></div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (pageStatus == "anime") {
    return (
      <div>
        <div>
          <div className="h-[130px] w-[100%] bg-[#83a2ff] border-b-2 border-black border-solid flex items-center justify-between">
            <div className="logo">
              <img src="logo.jpeg" width={122} height={130} />
              <h2 className="Poster-name">Quiz</h2>
            </div>
            <div>
              <img
                src="galaxy_303714-4260.avif"
                alt="galaxy"
                width={120}
                height={120}
                className=" animate-spin rounded-full"
              />
            </div>
            <div className="flex items-center flex-row-reverse gap-8">
              <img
                onClick={() => setPageStatus("profile")}
                src="image-from-rawpixel-id-6012974-png (1).png/"
                width={80}
                height={80}
              />
              <a>anime</a>
              <a onClick={() => setPageStatus("game")}>game</a>
              <a onClick={() => setPageStatus("movie")}>movie</a>
              <a>create</a>
            </div>
          </div>
          <div className="flex ">
            <div className="h-[1045px] bg-[#83a2ff] w-[200px]">
              <h1 className=" border-black border-b-2 border-solid ">home</h1>
              <h1>Your Quiz's</h1>
            </div>
            <div className="bg-[url('/Anime.webp')] w-[100%] h-[1045px] ">
              <div className="bg-[#7B66FF] w-[147vh] h-[700px] ml-[125px] mt-[100px]"></div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (pageStatus == "profile") {
    return <div></div>;
  }
}
