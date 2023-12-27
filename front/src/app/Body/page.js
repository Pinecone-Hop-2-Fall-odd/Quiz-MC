"use client";

import { useRouter } from "next/navigation";

export default function Body(popers) {
  console.log(popers);
  const router = useRouter();
  const handleCilke = () => {
    router.push("/Games?v=" + popers.id);
  };
  return (
    <div>
      <div className="flex flex-col">
        <div onClick={handleCilke}>
          <h1 className="text-white">{popers.name}</h1>
          <div className="Zozo">
            <img src={popers.img} width={268} height={300} />
            <button className="fill">togloh</button>
          </div>
        </div>
      </div>
    </div>
  );
}
