"use client";
import { useRouter } from "next/navigation";
export default function Header() {
  const router = useRouter();
  const handleCilke = () => {
    router.push("/users?v=");
  };
  return (
    <div className="header">
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
          className="gal-img"
        />
      </div>
      <div className="log-in" onClick={handleCilke}>
        <div className="log">
          <li>login/</li>
          <p>sing</p>
        </div>
      </div>
    </div>
  );
}
