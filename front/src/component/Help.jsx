import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Help() {
  const router = useRouter();
  const handleCilke = () => {
    router.push("/quiz?v=");
  };
  const animeRouter = useRouter();
  const animeClick = () => {
    animeRouter.push("games/anime?v=");
  };
  const movieRouter = useRouter();
  const movieClick = () => {
    movieRouter.push("games/movie?v=");
  };

  return (
    <>
      <div className="w-[100%] fixed h-[150px] gap-x-[20px] flex items-center justify-start bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div>
          <img src="/mc.jpeg" className="lo mr-[200px] ml-[20px]"></img>
        </div>
        <div className=" mr-[150px] flex flex-row gap-x-[70px]">
          <Link href="http://localhost:3000/games/anime?v=">
          <button  className="tus">
            ANIME
          </button>
          </Link>
          <Link href="http://localhost:3000/games/movie?v=">
          <button  className="tus">
            MOVIE
          </button>
          </Link>
        </div>
        <div className="flex items-center flex-col mr-[50px]">
          <h1 className="text-[50px] font-black">CHOOSE</h1>
          <h1 className="text-[40px] font-black text-[#83dfe9]">QUIZ</h1>
        </div>
        <div className="ml-[150px] mr-[50px] flex flex-row items-center gap-x-[70px]">
          <Link href="http://localhost:3000/games/mobile?v=">
          <button className="tus">GAMES</button>
          </Link>
          <button onClick={handleCilke} className="tus">
            CUSTOM
          </button>

          <img
            src="/pro.png"
            className="ml-[200px] h-[100px] w-[100px] cursor-pointer "
          ></img>
        </div>
      </div>
    </>
  );
}
