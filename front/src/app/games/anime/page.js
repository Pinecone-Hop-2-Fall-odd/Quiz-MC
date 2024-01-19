"use client";

import Help from "@/component/Help";
import { useRouter } from "next/navigation";

export default function anime() {
  const router = useRouter();
  const handleCilke = () => {
    router.push("/game/anime?v=");
  };

  return (
    <>
      <Help />
      <div className="bg-[url('/sakura.jpeg')] w-[100%] h-[100vh] bg-cover flex items-center justify-center">
        <div className=" flex flex-col bg-[url('/anime.jpeg')] h-[800px] w-[1500px] mt-[200px] bg-cover rounded-[20px] border-[4px] border-[#BEA9DF]">
          <div className=" w-[250px] ml-[40%] mt-[20px] h-[400px] ">
            <h1 className="tit text-white ">ANIME</h1>
            <div className="h-[50%] w-[100%] flex items-end justify-center">
              <button onClick={handleCilke} className="but mb-[20px] mt-800px] ">play</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
1