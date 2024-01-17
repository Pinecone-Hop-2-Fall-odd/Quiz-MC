"use client";

import Help from "@/component/Help";

export default function anime() {
  return (
    <>
      <Help />
      <div className="bg-[url('/sakura.jpeg')] w-[100%] h-[100vh] bg-cover flex items-center justify-center">
        <div className=" flex flex-col bg-[url('/anime.jpeg')] h-[800px] w-[1500px] mt-[200px] bg-cover rounded-[20px] border-[4px] border-[#BEA9DF]">
          <div className="bg-white w-[250px] ml-[20px] mt-[20px] h-[300px]">
            <h1 className="h-[50%] w-[100%]">Name</h1>
            <div className="h-[50%] w-[100%] flex items-end justify-center">
              <button className="mb-[20px] text-[]">play</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
