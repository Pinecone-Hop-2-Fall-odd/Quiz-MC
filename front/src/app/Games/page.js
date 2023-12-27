"use client";
import { useEffect, useState } from "react";
import Body from "../Body/page";

export default function Quize(popers) {
  const [count, setCount] = useState(0);
  console.log(count);
  useEffect(() => {
    setCount((prevCount) => prevCount + 0);
  });

  const Logo = [
    { name: "Google", src: "" },
    { name: "Instagram", src: "" },
    { name: "Youtube", src: "" },
  ];
  const Anime = [
    {
      name: "Kakarot",
      src: "https://static.miraheze.org/greatcharacterswiki/thumb/0/09/Goku.png/1200px-Goku.png",
      asuult: " saiyan name",
    },
    {
      name: "golden time",
      src: "https://pm1.aminoapps.com/6483/5de18a199ffbba021620df2dc7284528a919c91c_hq.jpg",
      asuult: "anime name",
    },
    {
      name: "akira Toriyama",
      src: "https://m.media-amazon.com/images/M/MV5BNDYyNTJkNmItYjgxNC00ODliLTg2MGMtZjkxNjEwYzdjNjUxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
      asuult: "dragon ball Creator",
    },
  ];
  const music = [
    {
      name: "golden hour",
      src: "https://xttrawave.com/wp-content/uploads/2023/07/The-Meaning-Behind-JVKE-golden-hour-Chasing-Sunsets-and-Love-1.jpg",
    },
    { name: "" },
    {},
  ];
  return (
    <div>
      <div className="">{Anime[count].asuult}</div>
      <img src={Anime[count].src} width={323} height={412} className="" />
      <button
        className="w-[80px] h-[34px] bg-white"
        onClick={() => setCount((prev) => prev + 1)}
      >
        onClick
      </button>
    </div>
  );
}
