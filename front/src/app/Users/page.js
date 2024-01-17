"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

export default function Login() {
  const router = useRouter();
  const [formValue, setFormValue] = useState({});

  const handleCilke = () => {
    router.push("/create?v=");
  };
  const videoRef = useRef(null);

  const toggleVideo = () => {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const handleLogin = async () => {
    try {
      if (!formValue.email || !formValue.password) {
        return;
      }

      const { data } = await axios.post(
        "http://localhost:8080/login",
        formValue
      );

      localStorage.setItem("uid", data.user._id);

      router.push("/home");
    } catch (err) {
      alert("email or password is incorrect");
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
                  placeholder="Email"
                  onChange={(e) =>
                    setFormValue((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="h-[40px] rounded-lg border-solid border-black border-2"
                />
              </div>
              <div>
                <input
                  placeholder="password"
                  onChange={(e) =>
                    setFormValue((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  className="h-[40px] rounded-lg border-solid border-black border-2"
                  type="password"
                  required
                  minlength="4"
                  maxlength="8"
                  size={8}
                />
              </div>
            </div>
            <button
              onClick={handleLogin}
              className="bg-blue-400 w-[189px] h-[46px] rounded-full"
            >
              Login
            </button>
          </div>
        </div>
        <h4
          onClick={handleCilke}
          className=" border-solid border-b-black border-2 text-blue-500 w-[50px] border-t-0 border-l-0 border-r-0 mt-[20px]"
        >
          create
        </h4>
      </div>
    </div>
  );
}
