"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";
import axios from "axios";
import { useState } from "react";

export default function Create() {
  const router = useRouter();
  const handleCilke = () => {
    router.push("/Users?v=");
  };

  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  async function NewUser() {
    const newuser = { age, email, password, name: name };
    setAge("");
    setName("");
    setEmail("");
    setPassword("");

    await axios.post("http://localhost:8080/user", { ...newuser });
  }

  const videoRef = useRef(null);

  const toggleVideo = () => {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };
  return (
    <div>
      <video
        ref={videoRef}
        className="background-video"
        loop
        autoPlay
        muted
        onClick={toggleVideo}
      >
        <source
          src="./istockphoto-1255754954-640_adpp_is.mp4"
          type="video/mp4"
        />
      </video>
      <div className="bg-white w-[467px] h-[400px] rounded-full pt-[100px] pl-[141px] pr-[1px] absolute top-[400px] left-[37.9%]">
        <div className="rounded-lg border-solid border-black m-0">
          <div className="flex flex-col gap-8 ">
            <div className="flex flex-col gap-2 w-[184px] ">
              <div>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Email"
                  className="h-[40px]  rounded-lg border-solid border-black border-2"
                />
              </div>
              <div>
                <input
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="h-[40px]  rounded-lg border-solid border-black border-2"
                />
              </div>
              <div>
                <input
                  placeholder="age"
                  type="number"
                  onChange={(e) => setAge(e.target.value)}
                  value={age}
                  className="h-[40px]  rounded-lg border-solid border-black border-2"
                />
              </div>
              <div>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="password"
                  className="h-[40px] rounded-lg border-solid border-black border-2"
                />
              </div>
            </div>
            <button
              onClick={() => {
                NewUser();
                handleCilke();
              }}
              className="bg-blue-400 w-[189px] h-[46px] rounded-full"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
